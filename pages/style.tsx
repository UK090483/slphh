import Typo from "@components/Typography/Typography";
import Image from "next/image";
import * as React from "react";

interface IStypeProps {}

const Style: React.FunctionComponent<IStypeProps> = (props) => {
  return (
    <div className=" ">
      <Typo variant="body">HEADER 1</Typo>
    </div>
  );
};

export default Style;
