import React from "react";
import PropTypes from "prop-types";

class VideoGame extends React.Component {
    render() {
        /* console.log(this.props.game) */
        const { gamey } = this.props;
        const { img, developer, title } = gamey

console.log(gamey)
        return (
            <section className="card">
                < img src={img} alt={title} />
                <h1>{title}</h1>
                <p>{developer}</p>
            </section>
        )
    }
}

VideoGame.propTypes = {
    gamey: PropTypes.shape({
        img: PropTypes.string.isRequired,
        developer: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired
};

export default VideoGame;