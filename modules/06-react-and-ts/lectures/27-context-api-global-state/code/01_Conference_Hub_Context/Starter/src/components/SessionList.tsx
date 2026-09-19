import { Link } from "react-router-dom";
import type { Session } from "../data/sessions";
import type { DisplayMode } from "../types/displayPreferences";

type SessionListProps = {
  sessions: Session[];
  displayMode: DisplayMode;
};

function SessionList({ sessions, displayMode }: SessionListProps) {
  return (
    <ul className={`item-list item-list--${displayMode}`}>
      {sessions.map((session) => (
        <li className={`item-card item-card--${displayMode}`} key={session.id}>
          <div className="item-copy">
            <Link className="text-link" to={`/sessions/${session.id}`}>
              {session.title}
            </Link>
            <span className="item-meta">Track: {session.track}</span>
          </div>
          <span className="item-id">{session.id}</span>
        </li>
      ))}
    </ul>
  );
}

export default SessionList;
