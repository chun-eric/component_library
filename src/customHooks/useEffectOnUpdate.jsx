import { useEffect, useRef } from "react";

// a function that only returns code when dependencies change
// dont run the first time but only run when something changes in dependencies
const useEffectOnUpdate = (effectFunction, deps) => {
  const firstRender = useRef(true); // Creates a persistent value that stays between renders, its not a DOM element but more like container value

  // doesnt run on first render as the effectFunction is NOOP function.
  useEffect(() => {
    // runs on first render
    if (firstRender.current) {
      // On the very first render...
      firstRender.current = false; // Switch off the "first render" flag // dont run the effect
    } else {
      // on subsequent renders
      effectFunction(); // run the effect
    }

    // clean up function that returns back to true when
    // 1. component unmounts (or not shown)
    // 2. dependency changes (firstRender.current value changes)
    // 3. react strict mode
    return () => {
      firstRender.current = true; // reset on unmount
    };
  }, deps);
};

export default useEffectOnUpdate;
