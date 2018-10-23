import React from "react";
import PropTypes from "prop-types";

const Paragraph = props => (
    <p>{props.p}</p>
);

Paragraph.propTypes = {
    p: PropTypes.string.isRequired,
};

export default Paragraph;