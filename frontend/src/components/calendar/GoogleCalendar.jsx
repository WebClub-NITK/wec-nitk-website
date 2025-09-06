'use client';

/**
 * GoogleCalendar Component
 *
 * A reusable React component for embedding Google Calendar iframes
 * into web pages. Designed for SIG event calendars.
 *
 * @param {string} calendarId - The Google Calendar ID (e.g., abc123@group.calendar.google.com)
 * @param {string} title - The title to display above the calendar
 * @returns {JSX.Element|null} The calendar component or null if no calendarId provided
 */
export default function GoogleCalendar({
  calendarId,
  title = 'Events Calendar',
}) {
  // Early return if no calendar ID is provided
  if (
    !calendarId ||
    typeof calendarId !== 'string' ||
    calendarId.trim() === ''
  ) {
    return null;
  }

  // Ensure the calendar ID is properly encoded for URL usage
  const encodedCalendarId = encodeURIComponent(calendarId.trim());

  // Construct the Google Calendar embed URL with Indian timezone and optimal settings
  const embedUrl = `https://calendar.google.com/calendar/embed?src=${encodedCalendarId}&ctz=Asia%2FKolkata&showTitle=0&showNav=1&showDate=1&showCalendars=0&showTz=0&showPrint=0&showTabs=1&mode=AGENDA&height=600&wkst=1&bgcolor=%23ffffff`;

  return (
    <div className="w-full mt-12 mb-8">
      {/* Calendar Title */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">
        {title}
      </h2>

      {/* Calendar Container */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-md border border-gray-200 bg-white">
        <iframe
          src={embedUrl}
          title={title}
          width="100%"
          height="600"
          className="w-full h-[600px] border-0 rounded-lg"
          loading="lazy"
          allowFullScreen
          style={{ minHeight: '600px' }}
        />
      </div>

      {/* Optional: Add a subtle note below the calendar */}
      <p className="text-xs text-gray-500 mt-2 text-center">
        Calendar events are displayed in Asia/Kolkata timezone
      </p>
    </div>
  );
}
