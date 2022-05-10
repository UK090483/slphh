import Pi from "@components/Pi";
import * as React from "react";

interface IStypeProps {}

const Style: React.FunctionComponent<IStypeProps> = (props) => {
  return (
    <div className=" ">
      <Pi percent={20} />
      <Pi percent={45} />
    </div>
  );
};

export default Style;
