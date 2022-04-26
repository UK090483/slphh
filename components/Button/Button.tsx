import Link from "@components/Link";
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  href?: string | null;
  external?: boolean;
  tabIndex?: -1 | 0;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick = () => {}, href, external, tabIndex = 0 } = props;

  const className =
    "inline-block px-8 md:px-12 py-1 md:py-2 rounded-full text-base-mobile md:text-base border-2 border-black  whitespace-nowrap hover:text-white hover:bg-black";

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
