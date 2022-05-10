import Newsletter from "@components/NewsLetter";
import React from "react";
import { PlugProps } from "./type";

interface INewsletterPlugProps {
  html?: string;
}

const NewsletterPlug: React.FunctionComponent<
  PlugProps<INewsletterPlugProps>
> = (props) => {
  const { html } = props.node;
  return <Newsletter html={html} />;
};

export default NewsletterPlug;
