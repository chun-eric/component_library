import { useState, createContext, useRef } from "react";
import useEffectOnUpdate from "../customHooks/useEffectOnUpdate";
import PropTypes from "prop-types";
import useToggle from "../customHooks/useToggle";

// context provider
const ToggleContext = createContext({
  toggle: () => {},
  open: false,
});

// the onToggle default paramets is a NOOP function or no operation function used in modern react
const Toggle = ({ children, onToggle = () => {} }) => {
  const [open, toggle] = useToggle();

  useEffectOnUpdate(onToggle, [open]);

  return (
    <ToggleContext.Provider value={{ toggle, open }}>
      {children}
    </ToggleContext.Provider>
  );
};

Toggle.propTypes = {
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func,
};

export default Toggle;
export { ToggleContext };
