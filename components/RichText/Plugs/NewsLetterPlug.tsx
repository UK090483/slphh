import NewsletterForm from "@components/NewsletterForm/NewsletterForm";
import React from "react";
import { PlugProps } from "./type";

interface INewsletterPlugProps {
  html?: string;
  link?: string;
}

const NewsletterPlug: React.FunctionComponent<
  PlugProps<INewsletterPlugProps>
> = (props) => {
  return <NewsletterForm />;
};

export default NewsletterPlug;
