/**
 * Generate iCalendar (.ics) file content for tour bookings
 * Compatible with iPhone Calendar and other calendar applications
 */

export function generateICalendar(params: {
  tourName: string;
  tourDescription: string;
  startDate: Date;
  customerName: string;
  customerEmail: string;
  duration: string;
}): string {
  const { tourName, tourDescription, startDate, customerName, customerEmail, duration } = params;

  // Format date to iCalendar format (YYYYMMDDTHHMMSSZ)
  const formatDate = (date: Date): string => {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");
    return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
  };

  // Calculate end date (assume full day tour - 8 hours)
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 8);

  const now = new Date();
  const dtstamp = formatDate(now);
  const dtstart = formatDate(startDate);
  const dtend = formatDate(endDate);

  // Generate unique ID
  const uid = `${Date.now()}-${Math.random().toString(36).substring(7)}@civilrightstrailtours.com`;

  // Build iCalendar content
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Civil Rights Trail Tours//Booking System//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${dtstart}`,
    `DTEND:${dtend}`,
    `SUMMARY:${tourName}`,
    `DESCRIPTION:${tourDescription.replace(/\n/g, "\\n")}`,
    `LOCATION:Huntsville, Alabama`,
    `STATUS:CONFIRMED`,
    `SEQUENCE:0`,
    `ORGANIZER;CN=Civil Rights Trail Tours:mailto:info@civilrightstrailtours.com`,
    `ATTENDEE;CN=${customerName};RSVP=TRUE:mailto:${customerEmail}`,
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    `DESCRIPTION:Reminder: ${tourName} tomorrow`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return icsContent;
}
