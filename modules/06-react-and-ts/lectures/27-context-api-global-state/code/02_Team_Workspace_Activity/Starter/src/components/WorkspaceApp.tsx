import { useState } from "react";
import type { PresenceStatus } from "../types";
import WorkspaceLayout from "./WorkspaceLayout";

function WorkspaceApp() {
  const [status, setStatus] = useState<PresenceStatus>("available");

  function handleStatusChange(nextStatus: PresenceStatus) {
    setStatus(nextStatus);
  }

  return (
    <div className="workspace-shell">
      <div className="hero-card">
        <p className="eyebrow">Team Workspace</p>
        <h1>Presence status</h1>
        <p className="muted">
          A shared feature already works through props. Your activity is to refactor
          the dependency path to typed Context.
        </p>
      </div>
      <WorkspaceLayout status={status} onStatusChange={handleStatusChange} />
    </div>
  );
}

export default WorkspaceApp;
