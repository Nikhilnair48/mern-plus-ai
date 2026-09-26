import { useContext } from "react";
import { Link } from "react-router-dom";
import { DisplayPreferencesContext } from "../context/DisplayPreferencesContext";
import type { Session } from "../data/sessions";
import { useAppDispatch, useAppSelector } from "../hooks";
import { sessionSaved } from "../features/planner/plannerSlice";

type SessionListProps = {
  sessions: Session[];
};

function SessionList({ sessions }: SessionListProps) {
  const displayPreferences = useContext(DisplayPreferencesContext);
  
  const dispatch = useAppDispatch();
  const savedSessionIds = useAppSelector(
    (state) => state.planner.savedSessionIds
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
            <span className="item-id">{session.id}</span>
            <button
              onClick={() => {
                // dispatch an action
                  dispatch(sessionSaved(session.id));
                }}
            >
              {isSaved ? "Saved" : "Save"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default SessionList;
