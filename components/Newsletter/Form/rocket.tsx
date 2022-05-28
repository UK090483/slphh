import clsx from "clsx";
import * as React from "react";

interface IRocketProps {
  className?: string;
}

const Rocket: React.FunctionComponent<IRocketProps> = ({ className }) => {
  return (
    <svg
      className={clsx("w-12 md:w-32 ", className)}
      viewBox="0 0 111 193"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.2091 19.0932C43.1281 22.1632 49.2892 24.3795 55.4835 24.3795C61.6778 24.3795 67.8555 22.1632 72.7745 19.0932M55.5001 189.717V112.704M55.5001 157.293C71.0189 157.293 83.6061 150.036 83.6061 141.089V39.7624C83.6061 24.1004 55.5001 3.28345 55.5001 3.28345C55.5001 3.28345 27.394 24.084 27.394 39.7624V141.089C27.394 150.036 39.9647 157.293 55.5001 157.293ZM3.3125 189.717L27.394 169.458V116.775L3.3125 137.034V189.717ZM107.688 189.717L83.6061 169.458V116.775L107.688 137.034V189.717Z"
        stroke="#CA497C"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Rocket;
