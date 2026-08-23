type TicketActionsProps = {
  ticketId: string;
  onEscalate: (ticketId: string) => void;
};

function TicketActions({ ticketId, onEscalate }: TicketActionsProps) {
  // function onEscalate(event: any) {
  //   console.log(event);
  // }
  
  return (
    <div className="ticket-actions">
      <button className="button" aria-label={`Escalate ${ticketId}`}
        onClick={() => onEscalate(ticketId)}>
        Escalate
      </button>
    </div>
  );
}

export default TicketActions;
