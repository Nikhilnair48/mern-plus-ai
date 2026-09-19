import type { PresenceStatus } from "../types";
import PresenceBadge from "./PresenceBadge";

type TopBarProps = {
  status: PresenceStatus;
};

function TopBar({ status }: TopBarProps) {
  return (
    <header className="top-bar">
      <div>
        <h2>Nina Patel</h2>
        <p className="muted">Product designer</p>
      </div>
      <PresenceBadge status={status} />
    </header>
  );
}

export default TopBar;
