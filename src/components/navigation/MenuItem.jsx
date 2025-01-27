import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ children }) => {
  return <div className='menu-item'>{children}</div>;
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired, // Add this line
};

export default MenuItem;
