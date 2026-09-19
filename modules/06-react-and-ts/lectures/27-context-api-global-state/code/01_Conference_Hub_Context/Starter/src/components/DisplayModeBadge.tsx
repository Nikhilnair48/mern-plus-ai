import type { DisplayMode } from "../types/displayPreferences";

type DisplayModeBadgeProps = {
  displayMode: DisplayMode;
};

function DisplayModeBadge({ displayMode }: DisplayModeBadgeProps) {
  return <span className="display-mode-badge">Display: {displayMode === "comfortable" ? "Comfortable" : "Compact"}</span>;
}

export default DisplayModeBadge;
