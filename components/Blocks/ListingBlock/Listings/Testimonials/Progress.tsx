import clsx from "clsx";
import * as React from "react";

interface IProgressProps {
  time: number;

  listener?: any;
}
type state = "init" | "run";
const Progress: React.FunctionComponent<IProgressProps> = (props) => {
  const { time: initTime, listener } = props;

  const [state, setState] = React.useState<state>("init");

  React.useEffect(() => {
    setState("init");
  }, [listener]);

  React.useEffect(() => {
    console.log("run");

    if (state === "run") return;
    requestAnimationFrame(() => {
      setState("run");
    });
  }, [state]);

  return (
    <div className="w-full border-2 border-black overflow-hidden">
      <style jsx>{`
        @keyframes in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }
        @keyframes out {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .progress-in {
          animation-name: in;
          animation-duration: ${initTime}ms;
        }
        .progress-out {
          transform: translateX(-100%);
          animation-name: out;
          animation-duration: 0s;
        }
      `}</style>

      <div
        className={clsx("h-2 bg-red w-full", {
          "progress-in": state === "run",
          "progress-out": state === "init",
        })}
      ></div>
    </div>
  );
};

export default Progress;
