import React from "react";
import dynamic from "next/dynamic";
import Section from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import Link from "@components/Link";
import Social from "./SocialIcons";
import Logos from "./Logos";
import { useAppContext } from "@components/AppContext";
import { HeaderNavigation } from "@lib/Navigation";
import BowWave from "../ BowWave";
const Marque = dynamic(() => import("./Marque"));

const Footer: React.FC = () => {
  const { data } = useAppContext();

  const year = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <BowWave />
      <footer
        data-testid="footer"
        className="relative flex flex-col items-center bg-black text-white  overflow-hidden"
      >
        <div className=" flex flex-col md:flex-row justify-between w-full pt-16 px-[10%] ">
          <Social />
          <HeaderNavigation
            items={data?.footer?.navigation || []}
            className="items-center justify-center flex flex-col md:flex-row my-8 md:my-0 w-full"
          />
          <Logos />
        </div>
        <div className="flex flex-col md:flex-row  gap-6 items-center justify-center mt-16 mb-12">
          <span>© {year}</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
