import Button from "../button/Button";
import { useContext } from "react";
import { MenuContext } from "../navigation/Menu";

const MenuButton = ({ children }) => {
  const { toggle } = useContext(MenuContext);

  return (
    <Button onClick={toggle} variant='danger'>
      {children}
    </Button>
  );
};

export default MenuButton;
