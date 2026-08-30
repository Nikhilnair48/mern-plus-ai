function App() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <h1>Project Idea Form</h1>
        <p>Build the React state logic for this prepared form.</p>
      </header>

      <div className="idea-grid">
        <form className="panel">
          <div className="form-stack">
            <div className="field">
              <label htmlFor="title">Project title</label>
              <input id="title" type="text" />
            </div>

            <div className="field">
              <label htmlFor="summary">Summary</label>
              <textarea id="summary" />
            </div>

            <div className="field">
              <label htmlFor="category">Category</label>
              <select id="category" defaultValue="">
                <option value="">Choose a category</option>
                <option value="Productivity">Productivity</option>
                <option value="Education">Education</option>
                <option value="Developer Tools">Developer Tools</option>
              </select>
            </div>

            <fieldset>
              <legend>Project stage</legend>
              <div className="choice-row">
                <label className="choice">
                  <input type="radio" name="stage" value="Idea" />
                  Idea
                </label>
                <label className="choice">
                  <input type="radio" name="stage" value="Prototype" />
                  Prototype
                </label>
              </div>
            </fieldset>

            <label className="choice">
              <input type="checkbox" />
              Open to collaborators
            </label>

            <button className="primary-button" type="submit">
              Save idea
            </button>
          </div>
        </form>

        <aside className="panel">
          <h2>Project preview</h2>
          <div className="preview-card">
            <strong>Project title</strong>
            <p>Project summary</p>
            <p>Category</p>
            <p>Project stage</p>
            <p>Collaboration status</p>
          </div>
          <div className="feedback">
            <p>Summary characters remaining will appear here.</p>
            <p>Ready-to-submit status will appear here.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default App;
