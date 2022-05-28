import NewsletterForm from "@components/Newsletter/Form/NewsletterForm";
import * as React from "react";

interface IStypeProps {}

const Style: React.FunctionComponent<IStypeProps> = (props) => {
  return (
    <div className=" ">
      <NewsletterForm />
    </div>
  );
};

export default Style;
