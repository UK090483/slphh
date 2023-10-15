import NewsletterForm from "@components/Newsletter/Form/NewsletterForm";
import * as React from "react";

interface IStypeProps {}

const Style: React.FunctionComponent<IStypeProps> = (props) => {
  const [res, setRes] = React.useState("");

  return (
    <div className=" h-screen w-full  items-center ">
      <NewsletterForm
        onSubmit={(e) => {
          console.log(e);
          return Promise.resolve(true);
        }}
      />
    </div>
  );
};

export default Style;
