import { Link } from "react-router-dom";
import type { Session } from "../data/sessions";
import { useContext } from "react";
import { DisplayPreferencesContext } from "../context/DisplayPreferencesContext";

type SessionListProps = {
  sessions: Session[];
};

function SessionList({ sessions }: SessionListProps) {
  const displayPreferences = useContext(DisplayPreferencesContext);
  if (displayPreferences === null) {
    throw new Error("DisplayPreferencesContext provider is missing!");
  }

  return (
    <ul className={`item-list item-list--${displayPreferences.displayMode}`}>
      {sessions.map((session) => (
        <li className={`item-card item-card--${displayPreferences.displayMode}`} key={session.id}>
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
