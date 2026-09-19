import type { PresenceStatus } from "../types";
import PresenceControls from "./PresenceControls";

type AvailabilityPanelProps = {
  status: PresenceStatus;
  onStatusChange: (nextStatus: PresenceStatus) => void;
};

function AvailabilityPanel({ status, onStatusChange }: AvailabilityPanelProps) {
  return (
    <section className="inner-panel">
      <h3>Presence status</h3>
      <p className="muted">Choose how your teammates will see your availability.</p>
      <PresenceControls status={status} onStatusChange={onStatusChange} />
    </section>
  );
}

export default AvailabilityPanel;
