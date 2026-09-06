import { type FormEvent, useState } from "react";
import { exhibits } from "../data/exhibits";

function Exhibits() {
  const [exhibitId, setExhibitId] = useState("E-205");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="page-card">
      <p className="eyebrow">Museum Guide</p>
      <h2>Exhibits</h2>
      <p className="muted">Choose an exhibit to open its detail destination.</p>

      <ul className="item-list">
        {exhibits.map((exhibit) => (
          <li className="item-card" key={exhibit.id}>
            <strong>{exhibit.title}</strong>
            <span className="item-id">{exhibit.id}</span>
          </li>
        ))}
      </ul>

      <form className="form-card" onSubmit={handleSubmit}>
        <h3>Open exhibit</h3>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="exhibit-id">Exhibit ID</label>
            <input
              id="exhibit-id"
              value={exhibitId}
              onChange={(event) => setExhibitId(event.target.value)}
            />
          </div>
          <button type="submit">Open exhibit</button>
        </div>
      </form>
    </section>
  );
}

export default Exhibits;
