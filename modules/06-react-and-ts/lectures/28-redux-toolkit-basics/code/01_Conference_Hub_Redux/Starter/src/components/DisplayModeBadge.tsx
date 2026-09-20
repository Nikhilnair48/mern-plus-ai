import { useContext } from "react";
import { DisplayPreferencesContext } from "../context/DisplayPreferencesContext";

function DisplayModeBadge() {
  const displayPreferences = useContext(DisplayPreferencesContext);

  if (displayPreferences === null) {
    throw new Error("DisplayPreferencesContext provider is missing");
  }

  return (
    <span className="display-mode-badge">
      Display: {displayPreferences.displayMode === "comfortable" ? "Comfortable" : "Compact"}
    </span>
  );
}

export default DisplayModeBadge;
