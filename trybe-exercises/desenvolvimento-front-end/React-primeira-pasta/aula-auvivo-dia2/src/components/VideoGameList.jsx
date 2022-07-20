import React from "react";
import VideoGame from "./VideoGame";
import PropTypes from "prop-types";

class VideoGameList extends React.Component {
    render() {

        const { gamess } = this.props

        return (
            <section className="card-list">
                {gamess.map((element) => <VideoGame planetImage={element} key={element.id} />)}
            </section>
        )
    }
}


VideoGameList.propTypes = {
    gamess: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired,
            developer: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
}


export default VideoGameList;