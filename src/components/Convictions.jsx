import React from "react";
import PropTypes from "prop-types";

const Convictions = ({ name, text, image }) => {
  return (
    <div>
      <img src={image} alt={name} />

      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

Convictions.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Convictions;
