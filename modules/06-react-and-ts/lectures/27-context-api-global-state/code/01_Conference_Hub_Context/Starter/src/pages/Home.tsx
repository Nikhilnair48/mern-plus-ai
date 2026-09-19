import PreferencesPanel from "../components/PreferencesPanel";
import type { DisplayMode } from "../types/displayPreferences";

type HomeProps = {
  displayMode: DisplayMode;
  onDisplayModeChange: (nextMode: DisplayMode) => void;
};

function Home({ displayMode, onDisplayModeChange }: HomeProps) {
  return (
    <section className="page-card">
      <p className="eyebrow">Conference Hub</p>
      <h2>Welcome</h2>
      <p>
        Browse sessions, review the schedule, and share feedback about the
        conference.
      </p>

      <PreferencesPanel
        displayMode={displayMode}
        onDisplayModeChange={onDisplayModeChange}
      />
    </section>
  );
}

export default Home;
