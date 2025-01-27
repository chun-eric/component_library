// import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import { MenuContext } from "../navigation/Menu";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import { navigationData } from "../../data/navigationData";

const MenuDropdown = ({ children }) => {
  const { open } = useContext(MenuContext);

  if (!open) return null;
  console.log("open", open);

  return (
    <div className='menu-dropdown'>
      <div className='py-1'>
        {open
          ? navigationData.map((item) => <MenuItem key={item}>{item}</MenuItem>)
          : null}
      </div>
    </div>
  );
};

MenuDropdown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuDropdown;
