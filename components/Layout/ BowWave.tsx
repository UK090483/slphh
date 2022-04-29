import clsx from "clsx";
import * as React from "react";

interface IBowWaveProps {}

const BowWave: React.FunctionComponent<IBowWaveProps> = (props) => {
  return (
    <div className={clsx("w-full bg-black ", { "h-12": true })}>
      <svg
        className=" -translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
        width="157"
        x="0px"
        y="0px"
        viewBox="0 0 109.1 31.1"
      >
        <path
          className=" fill-primary "
          // style={{ fill: "rgb(225,0,25)" }}
          d="M79.3,31c0.8,0-2.1,0,2.3,0c4,0,6-1.5,6.6-2c1.7-1.4,3.3-3.7,3.7-4.2C93,23.2,109.1,0,109.1,0H75.9v0H0v30.9 c0,0,32.8,0.3,76.1,0.1L79.3,31z"
        />
      </svg>
    </div>
  );
};

export default BowWave;
