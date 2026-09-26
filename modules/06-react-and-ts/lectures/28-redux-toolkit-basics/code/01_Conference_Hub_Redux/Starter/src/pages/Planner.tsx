// 1. Read the state from the store
// 2. Remove the session from the store
// 3. Clear all sessions from the store

import { sessions } from "../data/sessions";
import { plannerCleared, sessionRemoved } from "../features/planner/plannerSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

function Planner() {
  const dispatch = useAppDispatch();
  const savedSessionIds = useAppSelector(
    (state) => state.planner.savedSessionIds);
  
  // filter the sessions by the sessionIds -> ONLY the planned sessions
  const savedSessions = sessions.filter(
    (session) => savedSessionIds.includes(session.id)
  );


  return (
    <section className="page-card">
      <p className="eyebrow">Conference Hub</p>
      <h2>My Planner</h2>
      <p className="muted">Keep track of the sessions you plan to attend.</p>
      <button onClick={() => dispatch(plannerCleared())}>
        Clear planner
      </button>
      <div className="empty-state">
        {
          savedSessions.map((session) => (
            <div key={session.id}>
              <p>{session.title}</p>
              <button onClick={() => dispatch(sessionRemoved(session.id))}>
                Remove
              </button>
            </div>
          ))
        }
        <p className="muted">Save a session from the Sessions page to see it here.</p>
      </div>
    </section>
  );
}

export default Planner;
