import useFocusTrap from "@charlietango/use-focus-trap";
import Portal from "@components/Portal";
import Svg from "@components/Svg";
import useAnimationDelay from "@hooks/useAnimationDelay";
import useKeyPress from "@hooks/useKeyPress";
import React from "react";
import { useLockBodyScroll } from "react-use";
import DefaultNavigationItemBase from "./components/NavItem/NavigationItemBase";
import DefaultNavigationLink from "./components/NavItem/NavigationLink";
import useIsActive from "./helper/useIsActive";
import { useNavigation } from "./NavigationContext";
import {
  NavigationItemBaseComponent,
  NavigationLinkComponent,
  NavItem,
} from "./types";

export interface NavigationMobileProps {
  label?: string;
  className?: string;
  open?: boolean;
  items?: NavItem[];
  closeMenu?: () => void;
  NavigationLink?: NavigationLinkComponent;
  NavigationItemBase?: NavigationItemBaseComponent;
}

const NavigationMobile: React.FC<NavigationMobileProps> = ({
  open,
  items,
  closeMenu,
  NavigationLink,
  NavigationItemBase,
  children,
}) => {
  const NavigationLinkComponent = NavigationLink
    ? NavigationLink
    : DefaultNavigationLink;

  const NavigationItemBaseComponent = NavigationItemBase
    ? NavigationItemBase
    : DefaultNavigationItemBase;

  const { render, animation } = useAnimationDelay({
    delay: 300,
    listener: open,
  });

  const [overlays, setOverlays] = React.useState<NavItem[]>([]);

  React.useEffect(() => {
    if (!open) {
      setOverlays([]);
    }
  }, [open]);

  const handleClick = (type: string, item: NavItem) => {
    if (type === "link" && closeMenu) {
      return closeMenu();
    }
    setOverlays((i) => [...i, item]);
  };

  const handleBackClick = () => {
    setOverlays((i) => i.slice(0, -1));
  };
  useLockBodyScroll(render);

  const ref = useFocusTrap(render);

  useKeyPress(
    {
      Escape: (e) => {
        closeMenu && closeMenu();
      },
    },
    { useDocument: render }
  );

  return (
    <>
      {render && (
        <Portal>
          <div
            ref={ref}
            className={`flex flex-col items-start justify-center h-screen bg-white pl-2 sm:pl-24 fixed inset-0  z-10  transition-all transform duration-300 ${
              animation
                ? " translate-y-0 opacity-100 "
                : "-translate-y-96  opacity-0"
            }`}
          >
            {items &&
              items.map((item, index) => {
                return (
                  <ConditionalButton
                    index={index}
                    onClick={(type) => handleClick(type, item)}
                    key={item.label}
                    {...item}
                    NavigationItemBase={NavigationItemBaseComponent}
                    NavigationLink={NavigationLinkComponent}
                  />
                );
              })}

            {overlays &&
              overlays.map((item) => {
                return (
                  <div
                    key={item.label}
                    className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-white animate-fadeInFast"
                  >
                    <button
                      className="absolute transform rotate-180 top-32 right-6 "
                      onClick={handleBackClick}
                    >
                      <Svg icon="chevronRight" />
                    </button>

                    {item.items &&
                      item.items.map((item) => {
                        return (
                          <ConditionalButton
                            key={item.label}
                            onClick={(type) => handleClick(type, item)}
                            {...item}
                            NavigationItemBase={NavigationItemBaseComponent}
                            NavigationLink={NavigationLinkComponent}
                          />
                        );
                      })}
                  </div>
                );
              })}
            {children}
          </div>
        </Portal>
      )}
    </>
  );
};

const ConditionalButton: React.FC<
  NavItem & {
    onClick: (type: "link" | "item") => void;
    NavigationLink?: NavigationLinkComponent;
    NavigationItemBase?: NavigationItemBaseComponent;
    index?: number;
  }
> = (props) => {
  const { label, onClick, NavigationLink, NavigationItemBase, index } = props;

  const { active } = useIsActive(props);

  const NavigationLinkComponent = NavigationLink
    ? NavigationLink
    : DefaultNavigationLink;

  const NavigationItemBaseComponent = NavigationItemBase
    ? NavigationItemBase
    : DefaultNavigationItemBase;

  const hasChildren = props.items && props.items.length > 0;
  return hasChildren ? (
    <button onClick={() => onClick("item")}>
      <NavigationItemBaseComponent
        active={active}
        icon
        props={props}
        index={index}
      >
        {label}
      </NavigationItemBaseComponent>
    </button>
  ) : (
    <NavigationLinkComponent onClick={() => onClick("link")} {...props.link}>
      <NavigationItemBaseComponent
        index={index}
        active={active}
        props={props}
        place="mobile/link"
      >
        {label}
      </NavigationItemBaseComponent>
    </NavigationLinkComponent>
  );
};

export default NavigationMobile;
