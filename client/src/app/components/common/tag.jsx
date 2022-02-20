import React from "react";
import PropTypes from "prop-types";

const Tag = ({ label, color }) => {
  return <span className={"badge bg-" + color}>{label}</span>;
};
Tag.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string
};

export default Tag;
