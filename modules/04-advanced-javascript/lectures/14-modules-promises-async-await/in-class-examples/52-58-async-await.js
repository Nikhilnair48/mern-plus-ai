import {
  loadTicket
} from "./42-ticket-service.js";

import {
  formatTicketHeading,
  formatTicketTags
} from "./31-ticket-utils.js";

const ticketStatus = document.querySelector("#ticket-status");
const ticketOutput = document.querySelector("#ticket-output");

function renderTicket(ticket) {
  ticketOutput.textContent = [
    formatTicketHeading(ticket),
    `Priority: ${ticket.priority}`,
    `Ticket state: ${ticket.status}`,
    `Summary: ${ticket.summary}`,
    `Tags: ${formatTicketTags(ticket.tags)}`
  ].join("\n");
}

async function showTicket(shouldFail) {
  ticketStatus.textContent = "Loading ticket...";
  ticketOutput.textContent = "No ticket loaded";

  try {
    const ticket = await loadTicket(shouldFail);

    const updatedTicket = {
      ...ticket,
      status: "In progress"
    };

    renderTicket(updatedTicket);
    ticketStatus.textContent = "Ticket loaded";
  } catch (error) {
    ticketStatus.textContent = "Ticket could not be loaded";
    ticketOutput.textContent = error.message;
  }
}

document.querySelector("#load-ticket").addEventListener("click", () => {
  showTicket(false);
});

document.querySelector("#fail-ticket").addEventListener("click", () => {
  showTicket(true);
});
