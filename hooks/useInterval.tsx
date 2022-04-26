import { useEffect, useRef, useLayoutEffect, useState } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useInterval(
  callback: () => void,
  delay: number = 1000,
  run: boolean = true
) {
  const savedCallback = useRef(callback);
  const [running, SetRunning] = useState(false);

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!running && delay !== 0) {
      return;
    }
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay, running]);

  const start = () => SetRunning(true);
  const stop = () => SetRunning(false);

  return { start, stop };
}

export default useInterval;
