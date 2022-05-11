import Newsletter from "@components/NewsLetter";
import React from "react";
import { PlugProps } from "./type";

interface INewsletterPlugProps {
  html?: string;
  link?: string;
}

const NewsletterPlug: React.FunctionComponent<
  PlugProps<INewsletterPlugProps>
> = (props) => {
  const { html, link } = props.node;
  return <Newsletter html={html} link={link} />;
};

export default NewsletterPlug;
