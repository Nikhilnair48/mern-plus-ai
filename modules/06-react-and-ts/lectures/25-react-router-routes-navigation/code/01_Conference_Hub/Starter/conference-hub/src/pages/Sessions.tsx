import { type FormEvent, useState } from "react";
import { sessions } from "../data/sessions";
import { useNavigate } from "react-router-dom";

function Sessions() {
  const [sessionId, setSessionId] = useState("S-102");
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // what about validation?
    navigate(`/sessions/${sessionId}`);
  }

  return (
    <section className="page-card">
      <p className="eyebrow">Conference Hub</p>
      <h2>Sessions</h2>
      <p className="muted">Browse the available conference sessions.</p>

      <ul className="item-list">
        {sessions.map((session) => (
          <li className="item-card" key={session.id}>
            <div>
              {/* TODO 6: Make the title navigate to this session's detail destination. */}
              <strong>{session.title}</strong>
            </div>
            <span className="item-id">{session.id}</span>
          </li>
        ))}
      </ul>

      <form className="form-card" onSubmit={handleSubmit}>
        <h3>Open a session</h3>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="session-id">Session ID</label>
            <input
              id="session-id"
              value={sessionId}
              onChange={(event) => setSessionId(event.target.value)}
            />
          </div>
          <button type="submit">Open session</button>
        </div>
      </form>
    </section>
  );
}

export default Sessions;
