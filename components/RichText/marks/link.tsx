import React from "react";
import Link from "@components/Link";
import { LinkResult, linkQuery } from "@lib/Navigation/query";
import Button from "@components/Button/Button";
import StickyButton from "@components/Button/StickyButton";

type LinkMarkPros = {
  link?: LinkResult;
  asButton?: boolean;
  variant?: "button" | "stickyButton" | null;
};

export const linkMarkQuery = `
_type == "link" => {
  'link': link{${linkQuery()}},
    asButton,
    variant
  }`;

const LinkMark: React.FC<LinkMarkPros> = (props) => {
  const { link, asButton, variant } = props;

  // if (!link || !link.href) return null;

  if (asButton || variant === "button") {
    return (
      <Button href={link?.href} external={link?.external}>
        {props.children}
      </Button>
    );
  }
  if (variant === "stickyButton") {
    return (
      <StickyButton href={link?.href} external={link?.external}>
        {props.children}
      </StickyButton>
    );
  }
  return (
    <>
      {link?.href && (
        <Link
          href={link?.href}
          external={link?.external}
          className="underline font-bold"
        >
          {props.children}
        </Link>
      )}
    </>
  );
};

const link = (props: any) => {
  return <LinkMark {...props.mark}>{props.children}</LinkMark>;
};

export default link;
