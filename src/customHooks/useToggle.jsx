import { useState } from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

// custom hook that turns things on and off
// returns a state (on/off) and function to flip the switch
export default function useToggle({
  initialValue = false,
  onToggle = () => {},
}) {
  const [open, setOpen] = useState(initialValue);

  function toggle() {
    setOpen((prev) => !prev);
  }

  useEffectOnUpdate(onToggle, [open]);

  return [open, toggle];
}
