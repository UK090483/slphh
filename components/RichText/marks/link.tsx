import React from "react";
import Link from "@components/Link";
import { LinkResult, linkQuery } from "@lib/Navigation/query";
import Button from "@components/Button/Button";

type LinkMarkPros = {
  link?: LinkResult;
  asButton?: boolean;
};

export const linkMarkQuery = `
_type == "link" => {
  'link': link{${linkQuery()}},
    asButton,
  }`;

const LinkMark: React.FC<LinkMarkPros> = (props) => {
  const { link, asButton } = props;

  if (asButton) {
    return (
      <Button href={link?.href} external={link?.external}>
        {props.children}
      </Button>
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
