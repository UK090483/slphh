import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { RawForm } from "./RawForm";
import { Submitting } from "./Submitting";
import { Error } from "./Error";
import { Success } from "./Success";

interface INewsletterFormProps {}

const fakeFetch = () =>
  new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve({ json: () => ({ success: true }) });
    }, 2000);
  });

const sendForm = async (data: any) => {
  // return fakeFetch();
  return fetch("/api/cl", { method: "POST", body: JSON.stringify(data) });
};
type FormSteps = "init" | "submitting" | "success" | "error";

const NewsletterForm: React.FC<INewsletterFormProps> = (props) => {
  const [steps, setSteps] = React.useState<FormSteps>("init");
  const handleSubmit = (data: any) => {
    setSteps("submitting");
    sendForm(data)
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        //@ts-ignore
        setSteps(r["success"] ? "success" : "error");
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
      <div className="w-full  max-w-lg mx-auto ">
        {steps === "init" && <RawForm handleSubmit={handleSubmit} />}
        {steps === "submitting" && <Submitting />}
        {steps === "success" && <Success />}
        {steps === "error" && <Error />}
      </div>
    </AnimatePresence>
  );
};
export default NewsletterForm;
