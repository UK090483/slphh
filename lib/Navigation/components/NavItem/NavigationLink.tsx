import React from "react";
import Link from "@components/Link";
import { NavItem } from "../../types";
import clsx from "clsx";

export type NavigationLinkProps = NavItem["link"] & {
  onClick?: () => void;
  focus?: boolean;
  active?: boolean;
};

const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
  const { children, external, onClick, href, focus, active } = props;

  return (
    <Link
      onClick={onClick}
      className={clsx(
        `flex menuItem items-center leading-none text-center no-underline ${
          focus ? "" : ""
        }`,
        { active: active }
      )}
      href={href || "/"}
      external={external}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
