import { useState } from "react";

type ProfileFormData = {
  displayName: string;
  bio: string;
  role: string;
  openToCollaboration: boolean;
};

const initialProfile: ProfileFormData = {
  displayName: "",
  bio: "",
  role: "Student",
  openToCollaboration: false,
};

function App() {
  const [profile, setProfile] = useState<ProfileFormData>(initialProfile);
  // const [displayName, setDisplayName] = useState<string>(initialProfile.displayName);
  // const [bio, setBio] = useState<string>(initialProfile.bio);
  // const [role, setRole] = useState<string>(initialProfile.role);
  // const [collaboration, setCollaboration] = useState<boolean>(initialProfile.openToCollaboration);

  function handleDisplayNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setProfile({
      ...profile,
      displayName: event.currentTarget.value
    });
  }

  function handleBioChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setProfile({
      ...profile,
      bio: event.currentTarget.value
    });
  }

  function handleRoleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setProfile({
      ...profile,
      role: event.currentTarget.value
    });
  }

  function handleCollaborationChange(event: React.ChangeEvent<HTMLInputElement>) {
    setProfile({
      ...profile,
      openToCollaboration: event.currentTarget.checked
    });
  }

  return (
    <main className="page-shell">
      <header className="page-heading">
        <h1>Profile editor</h1>
        <p>Convert the existing form controls so React owns their current values.</p>
      </header>

      <div className="editor-grid">
        <section className="panel">
          <div className="form-stack">
            <div className="field">
              <label htmlFor="displayName">Display name</label>
              <input
                id="displayName"
                type="text"
                placeholder="Please enter you name..."
                value={profile.displayName}
                onChange={handleDisplayNameChange}
              />
            </div>

            <div className="field">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                // defaultValue={initialProfile.bio}
                value={profile.bio}
                maxLength={100}
                onChange={handleBioChange}
              />
            </div>

            <div className="field">
              <label htmlFor="role">Role</label>
              <select id="role" value={profile.role} onChange={handleRoleChange}>
                <option value="Student">Student</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Designer">Designer</option>
              </select>
            </div>

            <label className="choice">
              <input
                type="checkbox"
                defaultChecked={initialProfile.openToCollaboration}
              />
              Open to collaboration
            </label>
          </div>
        </section>

        <aside className="panel">
          <h2>Profile preview</h2>
          <div className="preview-card">
            <strong>{profile.displayName || "Your display name"}</strong>
            <p>Your role</p>
            <p>Open to collaboration: {profile.openToCollaboration ? "Yes" : "No"}</p>
            <p>Your bio will appear here.</p>
          </div>
          <p className="feedback">The preview is not connected to the form yet.</p>
        </aside>
      </div>
    </main>
  );
}

export default App;
