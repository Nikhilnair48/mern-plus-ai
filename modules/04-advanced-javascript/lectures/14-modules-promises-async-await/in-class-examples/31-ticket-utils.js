export function formatTicketHeading(ticket) {
  return `${ticket.id} | ${ticket.customer}`;
}

export function formatTicketTags(tags) {
  return tags.join(", ");
}
