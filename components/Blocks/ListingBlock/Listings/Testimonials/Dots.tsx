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
    <div className={` flex justify-center items-center py-4  ${className}`}>
      {new Array(count).fill("a").map((i, index) => (
        <div
          onClick={() => onChange(index)}
          key={index}
          className={`w-3 h-3 mx-0.5 rounded-full  border-[0.5px] transition-colors border-black ${
            active === index ? "bg-black" : " bg-white"
          }`}
        />
      ))}
    </div>
  );
};
