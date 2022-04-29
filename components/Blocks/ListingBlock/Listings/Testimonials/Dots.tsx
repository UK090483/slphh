import * as React from "react";

type DotsProps = {
  count: number;
  active: number;
  onChange: (number: number) => void;
  className?: string;
};
export const Dots: React.FC<DotsProps> = (props) => {
  const { count = 0, active = 0, onChange, className } = props;
  if (count < 2) return <></>;
  return (
    <div
      className={`flex justify-center items-center -translate-y-6 h-0  ${className}`}
    >
      {new Array(count).fill("a").map((i, index) => (
        <div
          onClick={() => onChange(index)}
          key={index}
          className={`w-3 h-3 mx-0.5 rounded-full  border-[0.5px] transition-colors border-current ${
            active === index ? "bg-current" : " bg-transparent"
          }`}
        />
      ))}
    </div>
  );
};
