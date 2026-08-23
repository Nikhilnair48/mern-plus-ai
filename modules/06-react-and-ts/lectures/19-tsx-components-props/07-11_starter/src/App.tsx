import EpisodeCard from "./EpisodeCard";
import EpisodeCardClass from "./EpisodeCardClass";

function App() {
  return (
    <main className="page">
      <section className="podcast">
        <p className="eyebrow">Podcast lab</p>
        <h1>Frontend Frequencies</h1>
        <p className="intro">
          A small React interface we will evolve during Lecture 19.
        </p>

        <div className="episode-grid">
          <EpisodeCardClass title="Intro to JS" topic="Javascript" duration={30} />
          <EpisodeCard title="Intro to Mongo" topic="Database" duration={45} />
          <EpisodeCard title="Intro to Python" topic="Python" duration={40} />
        </div>
      </section>
    </main>
  );
}

export default App;
