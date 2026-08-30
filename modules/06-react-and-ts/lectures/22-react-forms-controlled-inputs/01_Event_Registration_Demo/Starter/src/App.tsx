import { useState } from "react";

type RegistrationFormData = {
  name: string;
  learningGoal: string;
  track: string;
  attendanceMode: string;
  receiveUpdates: boolean;
};

const initialFormData: RegistrationFormData = {
  name: "",
  learningGoal: "",
  track: "",
  attendanceMode: "",
  receiveUpdates: false,
};

function getAttendanceLabel(attendanceMode: string) {
  if (attendanceMode === "online") {
    return "Online";
  }

  if (attendanceMode === "in-person") {
    return "In person";
  }

  return "Not selected";
}

function App() {
  const [formData, setFormData] =
    useState<RegistrationFormData>(initialFormData);

  function handleNameChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    setFormData({
      ...formData,
      name: event.currentTarget.value,
    });
  }

  function handleLearningGoalChange(
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    setFormData({
      ...formData,
      learningGoal: event.currentTarget.value,
    });
  }

  function handleTrackChange(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    setFormData({
      ...formData,
      track: event.currentTarget.value,
    });
  }

  function handleAttendanceModeChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    setFormData({
      ...formData,
      attendanceMode: event.currentTarget.value,
    });
  }

  function handleReceiveUpdatesChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    setFormData({
      ...formData,
      receiveUpdates: event.currentTarget.checked,
    });
  }

  return (
    <main className="page-shell">
      <header className="page-heading">
        <h1>Event registration</h1>
        <p>The related form values now live in one typed state object.</p>
      </header>

      <div className="demo-grid">
        <form
          className="panel"
          onSubmit={(event) => {
            event.preventDefault();
            console.log(formData);
          }}
        >
          <div className="form-stack">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleNameChange}
              />
            </div>

            <div className="field">
              <label htmlFor="learningGoal">Learning goal</label>
              <textarea
                id="learningGoal"
                value={formData.learningGoal}
                onChange={handleLearningGoalChange}
              />
            </div>

            <div className="field">
              <label htmlFor="track">Track</label>
              <select
                id="track"
                value={formData.track}
                onChange={handleTrackChange}
              >
                <option value="">Choose a track</option>
                <option value="React & TypeScript">React & TypeScript</option>
                <option value="Node.js">Node.js</option>
                <option value="MongoDB">MongoDB</option>
              </select>
            </div>

            <fieldset>
              <legend>Attendance</legend>
              <div className="radio-row">
                <label className="choice">
                  <input
                    type="radio"
                    name="attendanceMode"
                    value="in-person"
                    checked={formData.attendanceMode === "in-person"}
                    onChange={handleAttendanceModeChange}
                  />
                  In person
                </label>

                <label className="choice">
                  <input
                    type="radio"
                    name="attendanceMode"
                    value="online"
                    checked={formData.attendanceMode === "online"}
                    onChange={handleAttendanceModeChange}
                  />
                  Online
                </label>
              </div>
            </fieldset>

            <label className="choice checkbox-row">
              <input
                type="checkbox"
                checked={formData.receiveUpdates}
                onChange={handleReceiveUpdatesChange}
              />
              Receive event updates
            </label>
            <button className="primary-button" type="submit">Register</button>
          </div>
        </form>

        <aside className="panel state-panel">
          <h2>Current React state</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </aside>
      </div>

      <section className="panel preview-panel">
        <h2>Registration preview</h2>
        <div className="preview-card">
          <strong>{formData.name || "Name will appear here"}</strong>
          <p>{formData.learningGoal || "Learning goal will appear here"}</p>
          <p>Track: {formData.track || "Not selected"}</p>
          <p>Attendance: {getAttendanceLabel(formData.attendanceMode)}</p>
          <p>Event updates: {formData.receiveUpdates ? "Yes" : "No"}</p>
        </div>
      </section>
    </main>
  );
}

export default App;