import { useContext } from "react";
import { DisplayPreferencesContext } from "../context/DisplayPreferencesContext";

function DisplayModeControls() {
  const displayPreferences = useContext(DisplayPreferencesContext);
  if (displayPreferences === null) {
    throw new Error("DisplayPreferencesContext provider is missing!");
  }

  return (
    <div className="preferences-controls">
      <div>
        <p className="preferences-label">Display mode</p>
        <p className="muted">Choose a comfortable or compact browsing layout.</p>
      </div>

      <div className="action-row" aria-label="Display mode controls">
        <button
          className={displayPreferences.displayMode === "comfortable" ? "active" : "secondary"}
          onClick={() => displayPreferences.changeDisplayMode("comfortable")}
          type="button"
        >
          Comfortable
        </button>
        <button
          className={displayPreferences.displayMode === "compact" ? "active" : "secondary"}
          onClick={() => displayPreferences.changeDisplayMode("compact")}
          type="button"
        >
          Compact
        </button>
      </div>
    </div>
  );
}

export default DisplayModeControls;
