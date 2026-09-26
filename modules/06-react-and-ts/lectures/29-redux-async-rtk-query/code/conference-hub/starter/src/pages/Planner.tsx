import { useAppDispatch, useAppSelector } from "../app/hooks";
import { sessions } from "../data/sessions";
import {
  plannerCleared,
  sessionRemoved,
} from "../features/planner/plannerSlice";

function Planner() {
  const dispatch = useAppDispatch();
  const savedSessionIds = useAppSelector(
    (state) => state.planner.savedSessionIds,
  );

  const savedSessions = sessions.filter((session) =>
    savedSessionIds.includes(session.id),
  );

  return (
    <section className="page-card">
      <p className="eyebrow">Conference Hub</p>
      <h2>My Planner</h2>
      <p className="muted">
        Saved sessions are derived from the shared planner state.
      </p>

      {savedSessions.length === 0 ? (
        <p className="notice">No saved sessions yet.</p>
      ) : (
        <ul className="item-list">
          {savedSessions.map((session) => (
            <li className="item-card" key={session.id}>
              <div className="item-copy">
                <strong>{session.title}</strong>
                <span className="item-meta">Track: {session.track}</span>
              </div>
              <button
                type="button"
                onClick={() => dispatch(sessionRemoved(session.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="action-row planner-actions">
        <button
          type="button"
          disabled={savedSessionIds.length === 0}
          onClick={() => dispatch(plannerCleared())}
        >
          Clear planner
        </button>
      </div>
    </section>
  );
}

export default Planner;
