/* eslint-disable @next/next/no-img-element */
import { useAppContext } from "@components/AppContext";
import BowWave from "@components/Layout/ BowWave";
import { Logo } from "@components/Layout/Logo";
import Link from "@components/Link";
import Svg from "@components/Svg";
import { useScrollThreshold } from "@hooks/useScrollThreshold";
import { HeaderNavigation } from "@lib/Navigation";
import NavigationMobile from "@lib/Navigation/NavigationMobile";
import clsx from "clsx";
import React from "react";
import Burger from "./Burger";

const Nav: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { data } = useAppContext();
  const mainLogo = data?.footer?.logos && data.footer.logos[0];
  const navItems = data?.navigation;
  const langSwitchData = data?.langSwitchData;

  const scrolled = useScrollThreshold(50);

  return (
    <>
      <nav>
        <div
          className={clsx(
            "flex items-center justify-between w-full transition-shadow duration-700  pl-4 lg:px-[60px] ",
            { "shadow-lg ": scrolled, "shadow-none": !scrolled }
          )}
        >
          <Link aria-label="Home" href="/">
            <Logo small={scrolled} />
          </Link>

          <HeaderNavigation
            items={navItems || []}
            className="items-center justify-center hidden  menu:flex "
          />

          {/* <div className="flex gap-4 flex-shrink-0 items-center">
          <LangSwitch className="hidden menu:flex" slugs={langSwitchData} /> 
          </div>
          */}

          <button
            data-testid="menu-overlay-toggle "
            onClick={() => setOpen((s) => !s)}
            aria-label={"Open the menu"}
            aria-expanded={open}
            className="menu:hidden h-14  pr-4"
          >
            <Burger open={open} />
          </button>

          <Link
            external={true}
            className="hidden  menu:block"
            aria-label="Home"
            href="https://future.hamburg/"
          >
            <Logo small={scrolled} variant="b" />
          </Link>
        </div>
      </nav>
      <NavigationMobile
        items={navItems}
        open={open}
        closeMenu={() => {
          setOpen(false);
        }}
      >
        <Link
          external={true}
          className="opacity-0  animate-fadeInSlow  pl-4  pt-"
          aria-label="Home"
          href="https://future.hamburg/"
        >
          <Logo small={scrolled} variant="b" />
        </Link>
        {/* <LangSwitch
          slugs={langSwitchData}
          onClick={() => {
            setOpen(false);
          }}
        /> */}
      </NavigationMobile>

      <div
        className={clsx(
          "fixed bottom-0 w-screen transition-transform duration-700 ",
          {
            "translate-y-[72px] ": scrolled,
          }
        )}
      >
        <BowWave />
      </div>
    </>
  );
};

export default Nav;
