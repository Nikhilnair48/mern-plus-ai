import { Link } from "react-router-dom";
import DisplayModeBadge from "./DisplayModeBadge";
import { useAppSelector } from "../hooks";

function AppHeader() {
  const savedCount = useAppSelector(
    (state) => state.planner.savedSessionIds.length
  );

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
          <Link to="/planner">Planner</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/feedback">Feedback</Link>
        </nav>
        <div>
          <span>Saved: {savedCount}</span>
          <DisplayModeBadge />
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
