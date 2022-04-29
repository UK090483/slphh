import Image from "next/image";
import React from "react";

type LogoProps = {
  className?: string;
  small?: boolean;
};
export const Logo: React.FC<LogoProps> = ({ className = "", small }) => {
  return (
    <div
      className={`transition-all duration-700 w-32 py-2 ${
        small ? " h-16" : "h-32"
      }`}
    >
      <div className={` relative w-full h-full`}>
        <Image
          src="/LogoSLPHH.png"
          alt=" Logo"
          layout="fill"
          objectFit="contain"
          objectPosition={"left"}
        />
      </div>
    </div>
  );
};

export default Logo;
