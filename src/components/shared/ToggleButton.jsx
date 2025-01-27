import { useContext } from "react";
import { ToggleContext } from "../../context/Toggle";

const ToggleButton = ({ children }) => {
  const { toggle } = useContext(ToggleContext);
  return (
    <div onClick={toggle} className='relative'>
      {children}
    </div>
  );
};

export default ToggleButton;
