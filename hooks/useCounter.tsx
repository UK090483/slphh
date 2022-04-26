import { Dispatch, SetStateAction, useState } from "react";

interface ReturnType {
  count: number;
  next: () => void;
  prev: () => void;
  reset: () => void;
  setCount: Dispatch<SetStateAction<number>>;
}

function useCounter(max: number, initialValue?: number): ReturnType {
  const [count, setCount] = useState(initialValue || 0);

  const next = () => setCount((x) => (x + 1) % max);
  const prev = () => setCount((x) => (x === 0 ? max - 1 : x - 1));
  const reset = () => setCount(initialValue || 0);

  return {
    count,
    next,
    prev,
    reset,
    setCount,
  };
}

export default useCounter;
