import PropTypes from "prop-types";
import { ToggleContext } from "../../context/Toggle";
import { useContext } from "react";

const ToggleDisplay = ({ children }) => {
  const { open } = useContext(ToggleContext);
  return children(open);
};

ToggleDisplay.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ToggleDisplay;
