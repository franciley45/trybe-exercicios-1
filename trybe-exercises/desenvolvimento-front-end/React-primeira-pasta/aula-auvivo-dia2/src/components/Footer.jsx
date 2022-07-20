import React from "react";
import PropTypes from "prop-types";

class Footer extends React.Component {
    render() {
        /* console.log(this.props) */
        const { title, year } = this.props;

        return (
            <footer>
                <p>{title} </p>
                <h6>{year}</h6>
            </footer>
        )
    }
}

Footer.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
}

export default Footer;