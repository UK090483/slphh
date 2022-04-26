import Image from "next/image";
import * as React from "react";

interface IStypeProps {}

const Style: React.FunctionComponent<IStypeProps> = (props) => {
  return (
    <div className=" h-56 bg-blue-400 flex w-full justify-between ">
      <div className="bg-red px-12 truncate">BEFORE</div>

      {/* <div className="bg-green-300 px-12  h-11 w-[500px] flex">inner</div> */}
      <div className="grid grid-flow-col ">
        <div className="h-20  px-10  bg-green-300 truncate ">
          sdfjsldfkjlsdkfj
        </div>
        <div className="h-20 px-10 bg-gray-700 truncate ">
          sdfklsdkfölsdkfösldkf
        </div>
        <div className="h-20 px-10 bg-green-300 truncate ">
          {" "}
          sdfjsldfkjlsdkfj
        </div>
        <div className="h-20 px-10 bg-gray-700 truncate ">
          sdfklsdkfölsdkfösldkf
        </div>
        <div className="h-20 px-10 bg-green-300 truncate ">
          {" "}
          sdfjsldfkjlsdkfj
        </div>
        <div className="h-20 px-10 bg-gray-700 truncate ">
          sdfklsdkfölsdkfösldkf
        </div>
      </div>
      <div className=" bg-red px-12">AFTER</div>
    </div>
  );
};

export default Style;
