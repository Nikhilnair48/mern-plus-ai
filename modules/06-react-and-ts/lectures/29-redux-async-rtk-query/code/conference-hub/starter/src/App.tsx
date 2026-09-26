import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AppHeader from "./components/AppHeader";
import { DisplayPreferencesContext } from "./context/DisplayPreferencesContext";
import DayOneSchedule from "./pages/DayOneSchedule";
import DayTwoSchedule from "./pages/DayTwoSchedule";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Schedule from "./pages/Schedule";
import SessionDetails from "./pages/SessionDetails";
import Sessions from "./pages/Sessions";
import type { DisplayMode } from "./types/displayPreferences";

function App() {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("comfortable");

  function handleDisplayModeChange(nextMode: DisplayMode) {
    setDisplayMode(nextMode);
  }

  const displayPreferences = {
    displayMode,
    changeDisplayMode: handleDisplayModeChange,
  };

  return (
    <div className="app-shell">
      <DisplayPreferencesContext value={displayPreferences}>
        <AppHeader />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/sessions/:sessionId" element={<SessionDetails />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/planner" element={<Planner />} />

            <Route path="/schedule" element={<Schedule />}>
              <Route path="day-1" element={<DayOneSchedule />} />
              <Route path="day-2" element={<DayTwoSchedule />} />
            </Route>
          </Routes>
        </main>
      </DisplayPreferencesContext>
    </div>
  );
}

export default App;
