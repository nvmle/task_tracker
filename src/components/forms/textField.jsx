import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, name, value, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} onChange={onChange} value={value} />
    </>
  );
};
TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextField;
