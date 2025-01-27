import { createContext } from "react";

const ThemeContext = createContext({
  toggle: () => {},
  open: false,
});

export default ThemeContext;
