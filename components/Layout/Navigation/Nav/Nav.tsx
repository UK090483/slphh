/* eslint-disable @next/next/no-img-element */
import { useAppContext } from "@components/AppContext";
import { Logo } from "@components/Layout/Logo";
import Link from "@components/Link";
import Svg from "@components/Svg";
import { useScrollThreshold } from "@hooks/useScrollThreshold";
import { LangSwitch } from "@lib/LangSwitcherService/LangSwitch";
import { HeaderNavigation } from "@lib/Navigation";
import NavigationMobile from "@lib/Navigation/NavigationMobile";
import SanityImage from "@lib/SanityImage";
import clsx from "clsx";
import React from "react";

const Nav: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { data } = useAppContext();
  const mainLogo = data?.footer?.logos && data.footer.logos[0];
  const navItems = data?.navigation;
  const langSwitchData = data?.langSwitchData;
  const scrolled = useScrollThreshold(10);

  return (
    <>
      <nav>
        <div
          className={clsx(
            "flex items-center justify-between w-full transition-shadow px-5 py-5 ",
            { "shadow-lg ": scrolled }
          )}
        >
          <Link aria-label="Home" href="/">
            <Logo />
          </Link>

          <HeaderNavigation
            items={navItems || []}
            className="items-center justify-center hidden  menu:flex "
          />

          <div className="flex gap-4   flex-shrink-0 items-center">
            <LangSwitch className="hidden menu:flex" slugs={langSwitchData} />
          </div>

          <button
            data-testid="menu-overlay-toggle "
            onClick={() => setOpen((s) => !s)}
            aria-label={"Open the menu"}
            aria-expanded={open}
            className="menu:hidden mr-2"
          >
            <Svg className="w-[30px] h-[30px]" icon="hamburger" />
          </button>
        </div>
      </nav>
      <NavigationMobile
        items={navItems}
        open={open}
        closeMenu={() => {
          setOpen(false);
        }}
      >
        <LangSwitch
          slugs={langSwitchData}
          onClick={() => {
            setOpen(false);
          }}
        />
      </NavigationMobile>
    </>
  );
};

export default Nav;
