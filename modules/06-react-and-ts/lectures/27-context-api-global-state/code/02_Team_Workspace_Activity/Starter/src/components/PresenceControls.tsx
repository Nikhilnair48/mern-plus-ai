import type { PresenceStatus } from "../types";

type PresenceControlsProps = {
  status: PresenceStatus;
  onStatusChange: (nextStatus: PresenceStatus) => void;
};

function PresenceControls({ status, onStatusChange }: PresenceControlsProps) {
  return (
    <div className="controls-block">
      {/* TODO — Activity Part 2
       * Make this component read the shared presence feature
       * without requiring intermediate components to forward it.
       */}
      <div className="button-row" aria-label="Presence status controls">
        <button
          className={status === "available" ? "active" : "secondary"}
          onClick={() => onStatusChange("available")}
          type="button"
        >
          Available
        </button>
        <button
          className={status === "busy" ? "active" : "secondary"}
          onClick={() => onStatusChange("busy")}
          type="button"
        >
          Busy
        </button>
      </div>
      <p className="status-copy">Current status: {status === "available" ? "Available" : "Busy"}</p>
    </div>
  );
}

export default PresenceControls;
