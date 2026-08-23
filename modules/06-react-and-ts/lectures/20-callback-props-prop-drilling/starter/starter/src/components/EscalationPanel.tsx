type EscalationPanelProps = {
  latestEscalationId: string;
}
/*
function EscalationPanel(props: EscalationPanelProps) {
  const { latestEscalationId } = props;
*/

function EscalationPanel({ latestEscalationId }: EscalationPanelProps) {
  return (
    <aside className="panel escalation-panel">
      <p className="eyebrow">Escalation panel</p>
      <h2>Latest escalation</h2>
      <p>{latestEscalationId}</p>
      {/* <p className="muted">No escalated ticket is being stored yet.</p> */}
    </aside>
  );
}

export default EscalationPanel;
