import { useCallback, useEffect } from "react";

type KeydownItems = "ArrowDown" | "ArrowUp" | "ArrowLeft" | "ArrowRight";

type useKeyPressCallbacks = {
  [k: KeydownItems | string]: (
    e: React.KeyboardEvent<HTMLElement> | KeyboardEvent
  ) => void;
};

type UseKeyPressOptions = { useDocument?: boolean };

type UseKeyPress = (
  callBacks: useKeyPressCallbacks,
  options?: UseKeyPressOptions
) => {
  onKeyDown: React.KeyboardEventHandler<HTMLElement>;
};

const useKeyPress: UseKeyPress = (callBacks, options = {}) => {
  const downHandler = useCallback(
    (e: React.KeyboardEvent<HTMLElement> | KeyboardEvent) => {
      if (typeof callBacks[e.key] === "function") {
        e.preventDefault();
        e.stopPropagation();
        callBacks[e.key](e);
        return;
      }
      if (typeof callBacks["all"] === "function") {
        e.preventDefault();
        e.stopPropagation();
        callBacks["all"](e);
      }
    },
    [callBacks]
  );

  useEffect(() => {
    if (!options.useDocument) return;

    document.addEventListener("keydown", downHandler);
    return () => {
      document.removeEventListener("keydown", downHandler);
    };
  }, [downHandler, options.useDocument]);

  return {
    onKeyDown: (e) => {
      downHandler(e);
    },
  };
};

export default useKeyPress;
