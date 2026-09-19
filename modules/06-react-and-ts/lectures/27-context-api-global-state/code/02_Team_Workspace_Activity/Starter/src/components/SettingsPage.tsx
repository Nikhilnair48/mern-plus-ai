import type { PresenceStatus } from "../types";
import AvailabilityPanel from "./AvailabilityPanel";

type SettingsPageProps = {
  status: PresenceStatus;
  onStatusChange: (nextStatus: PresenceStatus) => void;
};

function SettingsPage({ status, onStatusChange }: SettingsPageProps) {
  return (
    <section className="panel-card">
      <p className="eyebrow">Settings</p>
      <h2>Workspace settings</h2>
      <AvailabilityPanel status={status} onStatusChange={onStatusChange} />
    </section>
  );
}

export default SettingsPage;
