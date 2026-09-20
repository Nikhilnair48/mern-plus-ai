import { Link, useParams } from "react-router-dom";
import { sessions } from "../data/sessions";

function SessionDetails() {
  const { sessionId } = useParams();
  const session = sessions.find((item) => item.id === sessionId);

  return (
    <section className="page-card">
      <p className="eyebrow">Session details</p>
      <h2>{session?.title ?? "Session not found"}</h2>
      <p>
        Route parameter: <span className="route-value">{sessionId}</span>
      </p>
      {session && <p className="muted">Track: {session.track}</p>}
      <Link className="text-link" to="/sessions">
        Back to sessions
      </Link>
    </section>
  );
}

export default SessionDetails;
