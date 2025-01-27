import { BsStar, BsStarFill } from "react-icons/bs";

import PropTypes from "prop-types";
import useToggle from "../../customHooks/useToggle";
import useEffectOnUpdate from "../../customHooks/useEffectOnUpdate";

const StarToggle = ({ onChange = () => {} }) => {
  // using custom hook - state and toggle function
  const [open, toggle] = useToggle(false);

  useEffectOnUpdate(onChange, [open]);

  return (
    <div className='flex flex-row gap-2'>
      <div className='relative'>
        {open ? (
          <BsStarFill onClick={toggle} className={`star filled`} />
        ) : (
          <BsStar onClick={toggle} className={`star }`} />
        )}
      </div>
    </div>
  );
};

StarToggle.propTypes = {
  onChange: PropTypes.func,
};

export default StarToggle;

// import Toggle from "../../context/Toggle";
// import ToggleButton from "../shared/ToggleButton";
// import ToggleOn from "../shared/ToggleOn";
// import ToggleOff from "../shared/ToggleOff";
// import ToggleDisplay from "../shared/ToggleDisplay";

{
  /* <Star /> */
}
{
  /* <ToggleOn>
          <div className='flex flex-row gap-2'>
            <BsStarFill className='star filled' />
          </div>
        </ToggleOn>
        <ToggleOff>
          <div className='flex flex-row gap-2'>
            <BsStar className='star' />
          </div>
        </ToggleOff> */
}

// <ToggleButton>
//   <ToggleDisplay>
//     {(open) => (
//       <div className='flex flex-row gap-2'>
//         <div className='relative'>
//           <BsStarFill
//             className={`star absolute ${
//               open ? "opacity-100" : "opacity-0"
//             } filled`}
//           />
//           <BsStar className={`star ${open ? "opacity-0" : "opacity-100"}`} />
//         </div>
//       </div>
//     )}
//   </ToggleDisplay>
// </ToggleButton>;
