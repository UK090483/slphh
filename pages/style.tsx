import * as React from "react";

interface IStypeProps {}

const Style: React.FunctionComponent<IStypeProps> = (props) => {
  const [res, setRes] = React.useState("");

  console.log(res);

  const handleClick = () => {
    fetch("/api/crtest")
      .then((r) => r.json())
      .then((r) => {
        console.log(r);

        setRes(r);
      });
  };

  return (
    <div className=" h-screen w-full  items-center ">
      <button onClick={handleClick}>Request</button>

      <pre> {JSON.stringify(res, null, 2)}</pre>
    </div>
  );
};

export default Style;
