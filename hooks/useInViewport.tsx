import React, { useState, useEffect } from "react";

type useInViewportOptions = {
  callBack?: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => boolean;
  onChange?: (isIntersecting: boolean) => void;
  rootMargin?: string;
  once?: boolean;
};

const useInViewport = (
  ref: React.RefObject<HTMLDivElement>,
  options?: useInViewportOptions
) => {
  const [intersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === "function") {
      const handler = (
        entries: IntersectionObserverEntry[],
        _observer: IntersectionObserver
      ) => {
        const isIntersecting = options?.callBack
          ? options.callBack(entries[0], _observer)
          : !(entries[0].intersectionRatio < 1);

        if (intersecting !== isIntersecting) {
          options?.onChange && options?.onChange(isIntersecting);
          setIntersecting(isIntersecting);
        }
      };
      const observer = new IntersectionObserver(handler, {
        root: null,
        rootMargin: options?.rootMargin || "100px",
        threshold: 1,
      });
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
    return () => {};
  }, [ref, options, intersecting]);

  return intersecting;
};

export default useInViewport;
