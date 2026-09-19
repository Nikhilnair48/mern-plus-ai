import DisplayModeControls from "./DisplayModeControls";

function PreferencesPanel() {
  return (
    <section className="preferences-panel">
      <h3>Browsing preferences</h3>
      <p className="muted">
        Adjust how the session list is presented across Conference Hub.
      </p>
      <DisplayModeControls />
    </section>
  );
}

export default PreferencesPanel;
