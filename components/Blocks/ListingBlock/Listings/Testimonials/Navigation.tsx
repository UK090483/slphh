import * as React from "react";

type NavigationProps = {
  onNext?: () => void;
  onPrev?: () => void;
  className?: string;
  count?: number;
};
export const Navigation: React.FC<NavigationProps> = (props) => {
  const {
    children,
    onNext = () => {},
    onPrev = () => {},
    className,
    count = 0,
  } = props;
  if (count < 2) return <></>;
  return (
    <div className={` w-full flex  justify-between  ${className}`}>
      <button
        className=" m-2 w-8 h-8 rounded-full border-black border-2 "
        onClick={onPrev}
      >
        {"<"}
      </button>
      {children}
      <button
        className=" m-2 w-8 h-8 rounded-full border-black border-2 "
        onClick={onNext}
      >
        {">"}
      </button>
    </div>
  );
};
