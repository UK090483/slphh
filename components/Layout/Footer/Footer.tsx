import React from "react";
import dynamic from "next/dynamic";
import Section from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import Link from "@components/Link";
import Social from "./SocialIcons";
import Logos from "./Logos";
import { useAppContext } from "@components/AppContext";
import { HeaderNavigation } from "@lib/Navigation";
const Marque = dynamic(() => import("./Marque"));

const Footer: React.FC = () => {
  const { data } = useAppContext();

  const year = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <footer
      data-testid="footer"
      className="relative flex flex-col items-center bg-black text-white  "
    >
      <svg
        width="125"
        height="36"
        viewBox="0 0 125 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute  top-0 -translate-y-1/2 left-0 "
      >
        <path
          d="M93.2942 36H0V0H125L104.318 30.1494C101.803 33.8156 97.6873 36 93.2942 36Z"
          fill="#E10019"
        />
      </svg>

      <div className=" flex flex-col md:flex-row justify-between w-full pt-16 px-[10%] ">
        <Social />
        <HeaderNavigation
          items={data?.footer?.navigation || []}
          className="items-center justify-center flex my-8 md:my-0 w-full"
        />
        <Logos />
      </div>
      <div className="flex flex-col md:flex-row  gap-6 items-center justify-center mt-16 mb-12">
        <span>© {year}</span>
      </div>
    </footer>
  );
};

export default Footer;
