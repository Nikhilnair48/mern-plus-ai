import type { Ticket } from "../types";
import TicketActions from "./TicketActions";

type TicketRowProps = {
  ticket: Ticket;
  onEscalate: (ticketId: string) => void;
};
// { props: { ticket: { id, subject, priority  } } }
function TicketRow({ ticket, onEscalate }: TicketRowProps) {
  const priorityClass = ticket.priority === "High" ? "priority priority-high" : "priority";

  return (
    <article className="ticket-row">
      <div>
        <div className="ticket-topline">
          <span className="ticket-id">{ticket.id}</span>
          <span className={priorityClass}>{ticket.priority}</span>
        </div>
        <h3 className="ticket-subject">{ticket.subject}</h3>
        <p className="ticket-customer">{ticket.customer}</p>
      </div>

      <TicketActions ticketId={ticket.id} onEscalate={onEscalate} />
    </article>
  );
}

export default TicketRow;
