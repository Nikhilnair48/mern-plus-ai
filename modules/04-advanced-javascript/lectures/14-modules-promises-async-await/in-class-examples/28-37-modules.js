import { supportTicket } from "./28-ticket-data.js";

import { formatTicketHeading, formatTicketTags } from "./31-ticket-utils.js";

document.querySelector("#status").textContent =
  "Ticket loaded through named imports";

document.querySelector("#output").textContent = [
  formatTicketHeading(supportTicket),
  `Priority: ${supportTicket.priority}`,
  `Ticket state: ${supportTicket.status}`,
  `Summary: ${supportTicket.summary}`,
  `Tags: ${formatTicketTags(supportTicket.tags)}`
].join("\n");
