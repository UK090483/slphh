import { useEffect, useState } from "react";
//@ts-ignore
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "react-use";

const Portal: React.FC = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  // useLockBodyScroll();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? //@ts-ignore
      createPortal(children, document.querySelector("#app-portal"))
    : null;
};

export default Portal;
