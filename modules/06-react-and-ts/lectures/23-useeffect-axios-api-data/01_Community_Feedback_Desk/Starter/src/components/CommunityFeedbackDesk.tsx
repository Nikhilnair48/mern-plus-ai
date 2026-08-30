import FeedbackInbox from "./FeedbackInbox";
import TabActivityDetector from "./TabActivityDetector";

function CommunityFeedbackDesk() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <h1>Community Feedback Desk</h1>
        <p>Browser activity and feedback data in one small React example.</p>
      </header>

      <div className="stack">
        <TabActivityDetector />
        <FeedbackInbox />
      </div>
    </main>
  );
}

export default CommunityFeedbackDesk;
