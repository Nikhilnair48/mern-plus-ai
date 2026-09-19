import PreferencesPanel from "../components/PreferencesPanel";

function Home() {
  return (
    <section className="page-card">
      <p className="eyebrow">Conference Hub</p>
      <h2>Welcome</h2>
      <p>
        Browse sessions, review the schedule, and share feedback about the
        conference.
      </p>

      <PreferencesPanel />
    </section>
  );
}

export default Home;
