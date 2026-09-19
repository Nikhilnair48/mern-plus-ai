import DisplayModeControls from "./DisplayModeControls";
import type { DisplayMode } from "../types/displayPreferences";

type PreferencesPanelProps = {
  displayMode: DisplayMode;
  onDisplayModeChange: (nextMode: DisplayMode) => void;
};

function PreferencesPanel({
  displayMode,
  onDisplayModeChange,
}: PreferencesPanelProps) {
  return (
    <section className="preferences-panel">
      <h3>Browsing preferences</h3>
      <p className="muted">
        Adjust how the session list is presented across Conference Hub.
      </p>
      <DisplayModeControls
        displayMode={displayMode}
        onDisplayModeChange={onDisplayModeChange}
      />
    </section>
  );
}

export default PreferencesPanel;
