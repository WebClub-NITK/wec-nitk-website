/**
 * Utility functions for fetching and processing hackathon data from Google Sheets
 */

const GOOGLE_SHEET_CSV_URL = 
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSwFYFS9A2DV34j90XB5tfk5L6o0yI97PhhrBpklPfRX0Rx6cANX9MqTBm45Uwwnms90CmmYP9i4KMa/pub?gid=1564950435&single=true&output=csv";

/**
 * Parse CSV text into array of objects
 * @param {string} csvText - Raw CSV text
 * @returns {Array} Array of objects with hackathon data
 */
function parseCSV(csvText) {
  const lines = csvText.split('\n').filter(line => line.trim());
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim());
  const hackathons = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length === 0) continue;

    const hackathon = {};
    headers.forEach((header, index) => {
      hackathon[header] = values[index] || '';
    });
    hackathons.push(hackathon);
  }

  return hackathons;
}

/**
 * Parse a single CSV line, handling quoted values
 * @param {string} line - CSV line
 * @returns {Array} Array of values
 */
function parseCSVLine(line) {
  const values = [];
  let currentValue = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentValue += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      values.push(currentValue.trim());
      currentValue = '';
    } else {
      currentValue += char;
    }
  }

  values.push(currentValue.trim());
  return values;
}

/**
 * Parse date range string into start and end dates
 * @param {string} dateString - Date string from sheet (e.g., "Jan 15, 2025 - Jan 17, 2025")
 * @returns {Object} Object with startDate and endDate
 */
function parseDateRange(dateString) {
  if (!dateString) {
    return { startDate: null, endDate: null };
  }

  const parts = dateString.split('-').map(p => p.trim());
  
  if (parts.length === 2) {
    const startDate = new Date(parts[0]);
    const endDate = new Date(parts[1]);
    
    return {
      startDate: isNaN(startDate.getTime()) ? null : startDate,
      endDate: isNaN(endDate.getTime()) ? null : endDate
    };
  } else if (parts.length === 1) {
    const date = new Date(parts[0]);
    return {
      startDate: isNaN(date.getTime()) ? null : date,
      endDate: isNaN(date.getTime()) ? null : date
    };
  }

  return { startDate: null, endDate: null };
}

/**
 * Determine hackathon status based on dates
 * @param {Date} startDate - Start date
 * @param {Date} endDate - End date
 * @returns {string} Status: "Upcoming", "Ongoing", or "Past"
 */
function determineStatus(startDate, endDate) {
  if (!startDate || !endDate) {
    return "Upcoming"; // Default to upcoming if dates are invalid
  }

  const now = new Date();

  if (now >= startDate && now <= endDate) {
    return "Ongoing";
  } else if (now < startDate) {
    return "Upcoming";
  } else {
    return "Past";
  }
}

/**
 * Fetch hackathons from Google Sheets CSV
 * @returns {Promise<Array>} Array of hackathon objects
 */
export async function fetchHackathonsFromSheet() {
  try {
    const response = await fetch(GOOGLE_SHEET_CSV_URL, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch hackathons: ${response.status}`);
    }

    const csvText = await response.text();
    const rawHackathons = parseCSV(csvText);

    // Transform to match the expected format
    const hackathons = rawHackathons.map((row) => {
      const { startDate, endDate } = parseDateRange(row.Dates || '');
      const status = determineStatus(startDate, endDate);

      return {
        id: row.Link || Math.random().toString(36).substr(2, 9),
        attributes: {
          title: row.Name || '',
          description: row.Theme || '',
          prizes: row.Prizes || '',
          mode: row.Mode || 'Online',
          start_time: startDate ? startDate.toISOString() : new Date().toISOString(),
          end_time: endDate ? endDate.toISOString() : new Date().toISOString(),
          link: row.Link || '',
          status: status,
          // Store the link for fetching preview metadata
          previewUrl: row.Link || ''
        }
      };
    });

    return hackathons;
  } catch (error) {
    console.error('Error fetching hackathons from sheet:', error);
    return [];
  }
}

/**
 * Fetch link preview metadata using microlink API
 * @param {string} url - URL to fetch preview for
 * @returns {Promise<Object>} Preview metadata with image, title, description
 */
export async function fetchLinkPreview(url) {
  if (!url) {
    return {
      image: '/placeholder.svg',
      title: '',
      description: ''
    };
  }

  try {
    const response = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(url)}`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch preview');
    }

    const data = await response.json();

    if (data.status === 'success') {
      return {
        image: data.data.image?.url || data.data.logo?.url || getFallbackImage(url),
        title: data.data.title || getDomain(url),
        description: data.data.description || 'Click to visit'
      };
    }

    return {
      image: getFallbackImage(url),
      title: getDomain(url),
      description: 'Click to visit'
    };
  } catch (error) {
    console.error('Error fetching link preview:', error);
    return {
      image: getFallbackImage(url),
      title: getDomain(url),
      description: 'Click to visit link'
    };
  }
}

/**
 * Get domain name from URL
 * @param {string} url - URL
 * @returns {string} Domain name
 */
function getDomain(url) {
  try {
    const domain = new URL(url).hostname;
    return domain.replace('www.', '');
  } catch {
    return url;
  }
}

/**
 * Get fallback image based on URL domain
 * @param {string} url - URL
 * @returns {string} Fallback image URL
 */
function getFallbackImage(url) {
  const domain = getDomain(url);

  if (domain.includes('devpost')) {
    return 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop';
  } else if (domain.includes('mlh')) {
    return 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop';
  } else if (domain.includes('hackathon')) {
    return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop';
  } else {
    return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop';
  }
}
