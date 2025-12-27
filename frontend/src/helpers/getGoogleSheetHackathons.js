const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSwFYFS9A2DV34j90XB5tfk5L6o0yI97PhhrBpklPfRX0Rx6cANX9MqTBm45Uwwnms90CmmYP9i4KMa/pub?gid=1564950435&single=true&output=csv";

const DEFAULT_HACKATHON_IMAGE =
  "https://cdn.dorahacks.io/static/files/189f8f1398ad4732d09ce824ea48afa3.png";

/**
 * Parse CSV text into array of objects
 * Handles multi-line quoted values properly
 */
function parseCSV(csvText) {
  const rows = parseCSVRows(csvText);
  if (rows.length < 2) return [];

  // First row is headers
  const headers = rows[0];

  // Parse data rows
  const data = [];
  for (let i = 1; i < rows.length; i++) {
    const values = rows[i];
    const row = {};

    headers.forEach((header, index) => {
      row[header.trim()] = values[index]?.trim() || "";
    });

    // Only include rows with a valid name and a valid URL link
    if (row["Name"] && row["Link"] && isValidUrl(row["Link"])) {
      data.push(row);
    }
  }

  return data;
}

/**
 * Check if a string is a valid URL
 */
function isValidUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Parse CSV text into array of rows, where each row is an array of values
 * Properly handles multi-line quoted values
 */
function parseCSVRows(csvText) {
  const rows = [];
  let currentRow = [];
  let currentValue = "";
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Escaped quote
        currentValue += '"';
        i++;
      } else {
        // Toggle quote state
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      // End of field
      currentRow.push(currentValue);
      currentValue = "";
    } else if ((char === "\n" || (char === "\r" && nextChar === "\n")) && !inQuotes) {
      // End of row (handle both \n and \r\n)
      currentRow.push(currentValue);
      currentValue = "";

      if (currentRow.length > 0) {
        rows.push(currentRow);
      }
      currentRow = [];

      // Skip \n if we had \r\n
      if (char === "\r" && nextChar === "\n") {
        i++;
      }
    } else if (char === "\r" && !inQuotes) {
      // Handle standalone \r as line ending
      currentRow.push(currentValue);
      currentValue = "";

      if (currentRow.length > 0) {
        rows.push(currentRow);
      }
      currentRow = [];
    } else {
      currentValue += char;
    }
  }

  // Don't forget the last value and row
  if (currentValue || currentRow.length > 0) {
    currentRow.push(currentValue);
    rows.push(currentRow);
  }

  return rows;
}

/**
 * Parse date range string into start and end dates
 * Handles formats like:
 * - "2025-11-27 - 2026-01-23"
 * - "Ongoing - 2025-12-28"
 */
function parseDateRange(dateString) {
  if (!dateString) return { startDate: null, endDate: null };

  const parts = dateString.split(" - ");

  let startDate = null;
  let endDate = null;

  if (parts.length === 2) {
    const startStr = parts[0].trim();
    const endStr = parts[1].trim();

    // Handle "Ongoing" as start date (use current date)
    if (startStr.toLowerCase() === "ongoing") {
      startDate = new Date();
    } else {
      startDate = new Date(startStr);
    }

    endDate = new Date(endStr);
  } else if (parts.length === 1) {
    // Single date - treat as both start and end
    startDate = new Date(parts[0].trim());
    endDate = new Date(parts[0].trim());
  }

  // Validate dates
  if (startDate && isNaN(startDate.getTime())) startDate = null;
  if (endDate && isNaN(endDate.getTime())) endDate = null;

  return { startDate, endDate };
}

/**
 * Determine hackathon status based on dates
 */
function getHackathonStatus(startDate, endDate) {
  const now = new Date();

  if (!startDate || !endDate) {
    return "upcoming"; // Default to upcoming if dates are invalid
  }

  if (now >= startDate && now <= endDate) {
    return "ongoing";
  } else if (now < startDate) {
    return "upcoming";
  } else {
    return "past";
  }
}

/**
 * Transform raw CSV row to hackathon object
 */
function transformHackathon(row, index) {
  const { startDate, endDate } = parseDateRange(row["Dates"]);
  const status = getHackathonStatus(startDate, endDate);

  return {
    id: index + 1,
    attributes: {
      title: row["Name"],
      link: row["Link"],
      start_time: startDate?.toISOString() || null,
      end_time: endDate?.toISOString() || null,
      registration_deadline: row["Registration Deadline"] || null,
      theme: row["Theme"],
      prizes: row["Prizes"],
      prize_amount: row["Prize Amount (USD)"],
      mode: row["Mode"] || "virtual",
      status: status,
      description: row["Theme"], // Use theme as description
      defaultImage: DEFAULT_HACKATHON_IMAGE,
    },
  };
}

/**
 * Fetch and parse hackathons from Google Sheet
 */
export async function getGoogleSheetHackathons() {
  try {
    const response = await fetch(GOOGLE_SHEET_CSV_URL, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch hackathons: ${response.status}`);
    }

    const csvText = await response.text();
    const rawData = parseCSV(csvText);
    const hackathons = rawData.map(transformHackathon);

    return hackathons;
  } catch (error) {
    console.error("Error fetching hackathons from Google Sheet:", error);
    return [];
  }
}

export { DEFAULT_HACKATHON_IMAGE };

