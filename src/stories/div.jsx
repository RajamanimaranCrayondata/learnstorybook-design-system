import React from "react";
// import PropTypes from "prop-types";
import "./div.css";

/**
 * Primary UI component for user interaction
 */
export const Div = ({ backgroundColor, label }) => {
  return (
    <div className="" style={backgroundColor && { backgroundColor }}>
      {label}
    </div>
  );
};

// Div.propTypes = {
//   onClick: PropTypes.func,
// };

// Div.defaultProps = {
//   onClick: undefined,
// };
