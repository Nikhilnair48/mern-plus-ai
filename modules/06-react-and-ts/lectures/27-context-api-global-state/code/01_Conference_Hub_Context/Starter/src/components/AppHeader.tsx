import { Link } from "react-router-dom";
import DisplayModeBadge from "./DisplayModeBadge";
import type { DisplayMode } from "../types/displayPreferences";

type AppHeaderProps = {
  displayMode: DisplayMode;
};

function AppHeader({ displayMode }: AppHeaderProps) {
  return (
    <header className="app-header">
      <div className="app-header-copy">
        <h1>Conference Hub</h1>
        <p className="muted">Browse sessions, plan your day, and share feedback.</p>
      </div>

      <div className="app-header-actions">
        <nav className="main-nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/sessions">Sessions</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/feedback">Feedback</Link>
        </nav>
        <DisplayModeBadge displayMode={displayMode} />
      </div>
    </header>
  );
}

export default AppHeader;
