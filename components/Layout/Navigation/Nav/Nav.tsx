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
import React from "react";

const Nav: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { data } = useAppContext();
  const mainLogo = data?.footer?.logos && data.footer.logos[0];
  const navItems = data?.navigation;
  const langSwitchData = data?.langSwitchData;
  const scrolled = useScrollThreshold(800);

  return (
    <>
      <nav>
        <div className="flex items-center justify-between w-full  border-b-2 border-black h-14 ">
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

        {mainLogo && (
          <div
            className={`
            transition-transform
            ${
              !scrolled ? "" : "translate-x-full"
            } absolute top-14 -translate-y-0.5 right-0 border-t-0 border-r-0 bg-white  border-2 border-black p-2`}
          >
            <div className="relative w-[200px] h-11 lg:w-[360px] lg:h-16">
              <SanityImage
                image={mainLogo.image}
                layout={"fill"}
                objectFit="contain"
              />
            </div>
          </div>
        )}
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
