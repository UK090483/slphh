import Image from "next/image";
import React from "react";

type LogoProps = {
  className?: string;
};
export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <Image width={138} height={100} src="/LogoSLPHH.png" alt=" Logo" />
    </div>
  );
};

export default Logo;
