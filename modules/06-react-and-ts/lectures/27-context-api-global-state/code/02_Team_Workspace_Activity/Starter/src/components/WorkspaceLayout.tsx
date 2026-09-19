import type { PresenceStatus } from "../types";
import SettingsPage from "./SettingsPage";
import TopBar from "./TopBar";

type WorkspaceLayoutProps = {
  status: PresenceStatus;
  onStatusChange: (nextStatus: PresenceStatus) => void;
};

function WorkspaceLayout({ status, onStatusChange }: WorkspaceLayoutProps) {
  return (
    <div className="workspace-layout">
      <TopBar status={status} />
      <SettingsPage status={status} onStatusChange={onStatusChange} />
    </div>
  );
}

export default WorkspaceLayout;
