import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { Submitting } from "./Submitting";
import { Error } from "./Error";
import { Success } from "./Success";

import dynamic from "next/dynamic";
const RawForm = dynamic(() => import("./RawForm"));

interface INewsletterFormProps {
  onSubmit: (data: any) => Promise<boolean>;
}

export const sendForm = async (data: any) => {
  const res = await fetch("/api/cl", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return !!json.success;
};

type FormSteps = "init" | "submitting" | "success" | "error";

const NewsletterForm: React.FC<INewsletterFormProps> = (props) => {
  const { onSubmit } = props;
  const [steps, setSteps] = React.useState<FormSteps>("init");
  const handleSubmit = (data: any) => {
    setSteps("submitting");
    onSubmit(data).then((res) => {
      setSteps(res ? "success" : "error");
    });
  };
  // Resets Form after Error message is shown
  React.useEffect(() => {
    if (!["error"].includes(steps)) return;
    const timeOut = setTimeout(() => {
      setSteps("init");
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [steps]);

  return (
    <AnimatePresence>
      <div className="w-full   mx-auto ">
        {steps === "init" && <RawForm handleSubmit={handleSubmit} />}
        {steps === "submitting" && <Submitting />}
        {steps === "success" && <Success />}
        {steps === "error" && <Error />}
      </div>
    </AnimatePresence>
  );
};
export default NewsletterForm;
