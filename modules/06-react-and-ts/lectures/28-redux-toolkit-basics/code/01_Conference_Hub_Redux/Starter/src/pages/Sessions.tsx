import { type FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SessionList from "../components/SessionList";
import { sessions } from "../data/sessions";

function Sessions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sessionId, setSessionId] = useState("S-102");
  const navigate = useNavigate();

  const selectedTrack = searchParams.get("track") ?? "all";

  const visibleSessions =
    selectedTrack === "all"
      ? sessions
      : sessions.filter((session) => session.track === selectedTrack);

  function handleTrackChange(nextTrack: string) {
    if (nextTrack === "all") {
      setSearchParams({});
      return;
    }

    setSearchParams({ track: nextTrack });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(`/sessions/${sessionId}`);
  }

  return (
    <section className="page-card">
      <p className="eyebrow">Conference Hub</p>
      <h2>Sessions</h2>
      <p className="muted">Browse the available conference sessions.</p>

      <div className="filter-bar" aria-label="Session track filter">
        {[
          ["all", "All"],
          ["react", "React"],
          ["typescript", "TypeScript"],
        ].map(([value, label]) => (
          <button
            className={`filter-button ${selectedTrack === value ? "active" : ""}`}
            key={value}
            onClick={() => handleTrackChange(value)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>

      <p className="muted">
        Current track: <span className="route-value">{selectedTrack}</span>
      </p>

      <SessionList sessions={visibleSessions} />

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
