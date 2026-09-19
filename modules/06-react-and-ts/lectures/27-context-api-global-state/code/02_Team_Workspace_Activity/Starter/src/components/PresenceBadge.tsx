import type { PresenceStatus } from "../types";

type PresenceBadgeProps = {
  status: PresenceStatus;
};

function PresenceBadge({ status }: PresenceBadgeProps) {
  return <span className={`status-badge ${status}`}>{status === "available" ? "Available" : "Busy"}</span>;
}

export default PresenceBadge;
