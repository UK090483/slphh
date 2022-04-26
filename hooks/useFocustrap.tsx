import { useRef, useEffect } from "react";

function useFocusTrap() {
  const elRef = useRef<HTMLDivElement | null>(null);
  const focusAbles = useRef<NodeListOf<Element> | null>(null);

  function handleFocus(e: KeyboardEvent) {
    if (!elRef.current) return;

    if (!focusAbles.current) {
      focusAbles.current = elRef.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      //@ts-ignore
      focusAbles.current[0].focus();
      return;
    }

    const firstFocusableEl = focusAbles.current[0];
    const lastFocusableEl = focusAbles.current[focusAbles.current.length - 1];
    var isTabPressed = e.key === "Tab";

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      /* shift + tab */ if (document.activeElement === firstFocusableEl) {
        //@ts-ignore
        lastFocusableEl.focus();
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    }

    if (document.activeElement === lastFocusableEl) {
      //@ts-ignore
      firstFocusableEl.focus();
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  }
  useEffect(() => {
    if (!elRef.current) return;
    window.addEventListener("keydown", handleFocus);
    return () => {
      window.removeEventListener("keydown", handleFocus);
    };
  }, []);

  return elRef;
}

export default useFocusTrap;
