import * as React from "react";

interface IPiProps {
  percent: number;
  color?: string;
  thickness?: string;
}

const Pi: React.FunctionComponent<IPiProps> = (props) => {
  const { percent = 0, color = "purple", thickness = "25%" } = props;
  return (
    <div className="aspect-w-1 aspect-h-1">
      <div
        style={{
          background: `conic-gradient(${color} calc(${percent}*1%),#0000 0)`,
          mask: `radial-gradient(farthest-side,#0000 calc(99% - ${thickness}),#000 calc(100% - ${thickness}))`,
          WebkitMask: `radial-gradient(farthest-side,#0000 calc(99% - ${thickness}),#000 calc(100% - ${thickness}))`,
        }}
        className=" w-full h-full  rounded-full"
      ></div>
    </div>
  );
};

export default Pi;
