import clsx from "clsx";
import * as React from "react";

interface IBurgerProps {
  open: boolean;
}

const Burger: React.FunctionComponent<IBurgerProps> = (props) => {
  const { open } = props;
  const baseClass = clsx(
    "block absolute  h-0.5 w-6 bg-current duration-500   transition-all"
  );

  return (
    <div className="relative w-6  ">
      <span
        aria-hidden={true}
        className={clsx(baseClass, {
          "rotate-[135deg]": open,
          " -translate-y-1.5": !open,
        })}
      />
      <span
        aria-hidden={true}
        className={clsx(baseClass, { "opacity-0 ": open })}
      />
      <span
        aria-hidden={true}
        className={clsx(baseClass, {
          "-rotate-[135deg] ": open,
          " translate-y-1.5": !open,
        })}
      />
    </div>
  );
};

export default Burger;
