import type { Ticket } from "../types";
import TicketRow from "./TicketRow";

const paymentTicket: Ticket = {
  id: "T-204",
  subject: "Payment failed",
  customer: "Riya Shah",
  priority: "High",
};

const passwordTicket: Ticket = {
  id: "T-318",
  subject: "Cannot reset password",
  customer: "Daniel Lee",
  priority: "Normal",
};

const duplicateChargeTicket: Ticket = {
  id: "T-427",
  subject: "Duplicate charge",
  customer: "Mehul Rao",
  priority: "High",
};

type TicketQueueProps = {
  onEscalate: (ticketId: string) => void;
}

function TicketQueue({ onEscalate }: TicketQueueProps) {
  return (
    <section className="panel queue">
      <header className="queue-header">
        <h2>Open tickets</h2>
        <p className="muted">Three tickets are waiting for review.</p>
      </header>

      <TicketRow ticket={paymentTicket} onEscalate={onEscalate} />
      <TicketRow ticket={passwordTicket} onEscalate={onEscalate} />
      <TicketRow ticket={duplicateChargeTicket} onEscalate={onEscalate} />
    </section>
  );
}

export default TicketQueue;
