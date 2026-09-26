import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { DisplayPreferencesContext } from "../context/DisplayPreferencesContext";
import { sessionSaved } from "../features/planner/plannerSlice";
import type { Session } from "../data/sessions";

type SessionListProps = {
  sessions: Session[];
};

function SessionList({ sessions }: SessionListProps) {
  const displayPreferences = useContext(DisplayPreferencesContext);
  const dispatch = useAppDispatch();
  const savedSessionIds = useAppSelector(
    (state) => state.planner.savedSessionIds,
  );

  if (displayPreferences === null) {
    throw new Error("DisplayPreferencesContext provider is missing");
  }

  const { displayMode } = displayPreferences;

  return (
    <ul className={`item-list item-list--${displayMode}`}>
      {sessions.map((session) => {
        const isSaved = savedSessionIds.includes(session.id);

        return (
          <li className={`item-card item-card--${displayMode}`} key={session.id}>
            <div className="item-copy">
              <Link className="text-link" to={`/sessions/${session.id}`}>
                {session.title}
              </Link>
              <span className="item-meta">Track: {session.track}</span>
            </div>
            <div className="action-row">
              <span className="item-id">{session.id}</span>
              <button
                disabled={isSaved}
                onClick={() => dispatch(sessionSaved(session.id))}
                type="button"
              >
                {isSaved ? "Saved" : "Save"}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default SessionList;
