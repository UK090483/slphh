import NewsletterForm, {
  sendForm,
} from "@components/Newsletter/Form/NewsletterForm";
import React from "react";
import { PlugProps } from "./type";

interface INewsletterPlugProps {
  html?: string;
  link?: string;
}

const NewsletterPlug: React.FunctionComponent<
  PlugProps<INewsletterPlugProps>
> = (props) => {
  return <NewsletterForm onSubmit={sendForm} />;
};

export default NewsletterPlug;
