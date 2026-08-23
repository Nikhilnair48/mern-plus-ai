import { Component } from "react";
import { EpidsodeCardProps } from "./types";

class EpisodeCardClass extends Component<EpidsodeCardProps> {
    // constructor() {}

    componentDidMount(): void {
        console.log("Mounted");
    }

    componentDidUpdate(prevProps: Readonly<EpidsodeCardProps>, 
        prevState: Readonly<{}>, 
        snapshot?: any): void {
            console.log("Updated");
    }

    componentWillUnmount(): void {
        console.log("Unmounted");
    }

    render() {
        const { title, topic, duration } = this.props;
        return (
             <article className="episode-card">
                <p className="episode-topic">{topic}</p>
                <h2>{title}</h2>
                <p className="episode-duration">{duration} min</p>
                {/* <p>Live: {props.isLive}</p> */}
            </article>
        );
    }
}

export default EpisodeCardClass;