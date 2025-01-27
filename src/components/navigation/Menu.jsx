import useToggle from "../../customHooks/useToggle";
import { createContext } from "react";
import PropTypes from "prop-types";

// creating context
const MenuContext = createContext();

const Menu = ({ children, onOpen }) => {
  const [open, toggle] = useToggle({ initialValue: false, onToggle: onOpen });

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      <div className='menu'>{children}</div>
    </MenuContext.Provider>
  );
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  onOpen: PropTypes.func,
};

export default Menu;
export { MenuContext };
