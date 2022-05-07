import Link from "@components/Link";
import { useSection } from "@components/Section/SectionContext";
import clsx from "clsx";
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  href?: string | null;
  external?: boolean;
  tabIndex?: -1 | 0;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick = () => {}, href, external, tabIndex = 0 } = props;
  const { bg } = useSection();

  const className = clsx(
    "inline-block px-8 md:px-12 py-1 md:py-2 whitespace-nowrap rounded-full transition-all duration-500 text-base-mobile md:text-base",
    "border-2   hover:bg-black",
    "text-black hover:text-white",
    {
      "border-black": !bg || ["white", "primary", "grey"].includes(bg),
      "hover:text-primary": bg === "primary",
      "text-black hover:text-secondary border-black": bg === "secondary",
      "hover:text-gray-300 ": bg === "grey",
      "border-primary text-primary hover:text-black hover:bg-primary":
        bg === "black",
    }
  );

  if (href) {
    return (
      <Link className={className} href={href} external={external}>
        {children}
      </Link>
    );
  }

  return (
    <button
      tabIndex={tabIndex}
      onClick={onClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
