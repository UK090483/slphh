import React from "react";
import NextLink from "next/link";
import { useHomeRoute } from "./AppContext";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  locale?: string;
  scroll?: boolean;
  role?: string;
}

export const Link: React.FC<LinkProps> = (props) => {
  const {
    href,
    children,
    className,
    external,
    locale,
    onClick,
    scroll,
    role,
    ...rest
  } = props;

  const { parseRoute } = useHomeRoute();

  if (external) {
    return (
      <a
        {...rest}
        href={href}
        role={role}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={parseRoute(href, locale)}
      passHref
      locale={locale}
      scroll={scroll}
    >
      <a {...rest} onClick={onClick} role={role} className={className}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;

export const ConditionalLink: React.FC<LinkProps & { condition: boolean }> = ({
  condition,
  ...rest
}) => {
  if (condition) {
    return <Link {...rest} />;
  }

  return <div className={rest.className}>{rest.children}</div>;
};
