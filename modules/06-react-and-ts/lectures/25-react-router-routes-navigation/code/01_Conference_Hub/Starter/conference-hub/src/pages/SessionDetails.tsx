import { useParams } from "react-router-dom";

function SessionDetails() {
  const { sessionId } = useParams();

  return (
    <section className="page-card">
      <p className="eyebrow">Conference Hub</p>
      <h2>Session details</h2>
      <p>
        Session ID: <span className="route-value">{sessionId}</span>
      </p>
    </section>
  );
}

export default SessionDetails;
