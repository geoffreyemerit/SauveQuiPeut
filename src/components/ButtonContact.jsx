import React from "react";
import PropTypes from "prop-types";

const ButtonContact = ({ naming }) => {
  return (
    <div className="buttonContact hover:text-white hover:bg-left">{naming}</div>
  );
};

ButtonContact.propTypes = {
  naming: PropTypes.string.isRequired,
};
export default ButtonContact;
