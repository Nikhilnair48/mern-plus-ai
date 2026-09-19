import type { DisplayMode } from "../types/displayPreferences";

type DisplayModeControlsProps = {
  displayMode: DisplayMode;
  onDisplayModeChange: (nextMode: DisplayMode) => void;
};

function DisplayModeControls({
  displayMode,
  onDisplayModeChange,
}: DisplayModeControlsProps) {
  return (
    <div className="preferences-controls">
      <div>
        <p className="preferences-label">Display mode</p>
        <p className="muted">Choose a comfortable or compact browsing layout.</p>
      </div>

      <div className="action-row" aria-label="Display mode controls">
        <button
          className={displayMode === "comfortable" ? "active" : "secondary"}
          onClick={() => onDisplayModeChange("comfortable")}
          type="button"
        >
          Comfortable
        </button>
        <button
          className={displayMode === "compact" ? "active" : "secondary"}
          onClick={() => onDisplayModeChange("compact")}
          type="button"
        >
          Compact
        </button>
      </div>
    </div>
  );
}

export default DisplayModeControls;
