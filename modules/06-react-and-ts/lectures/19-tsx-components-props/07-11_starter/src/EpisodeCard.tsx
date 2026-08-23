import { EpidsodeCardProps } from "./types";

// props
function EpisodeCard({ title, topic, duration }: EpidsodeCardProps) {
  return (
    <article className="episode-card">
      <p className="episode-topic">{topic}</p>
      <h2>{title}</h2>
      <p className="episode-duration">{duration} min</p>
      {/* <p>Live: {props.isLive}</p> */}
    </article>
  );
}

export default EpisodeCard;