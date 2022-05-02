import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

type PageTransitionProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  timeOut?: number;
  children: React.ReactElement;
};

const classNames = "page-transition";
const ID = "pageTransition";
const PageTransition: React.FC<PageTransitionProps> = (props) => {
  const { as = "div", children, className, timeOut = 300 } = props;
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [state, setState] = useState<
    "enter" | "enter-active" | "exit" | "exit-active"
  >("enter");

  useEffect(() => {
    console.log("animate");
  }, [children.key]);

  useEffect(() => {
    if (["enter", "exit"].includes(state)) return;
  }, [state]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    const aniStart = async () => {
      setState("exit");
      timer = setTimeout(() => {
        setState("exit-active");
        console.log("aniStart");
      }, timeOut);
    };
    const aniEnd = () => {
      setState("enter-active");
      if (timer) {
        clearTimeout(timer);
      }

      if (isActive) {
        setIsActive(false);
      }
    };

    router.events.on("routeChangeStart", aniStart);
    router.events.on("routeChangeComplete", aniEnd);
    router.events.on("routeChangeError", aniEnd);

    return () => {
      router.events.off("routeChangeStart", aniStart);
      router.events.off("routeChangeComplete", aniEnd);
      router.events.off("routeChangeError", aniEnd);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [router, timeOut]);

  const Component = as;

  return (
    <Component id={ID} className={`${className} ${classNames}-${state}`}>
      {children}
    </Component>
  );
};
export default PageTransition;
