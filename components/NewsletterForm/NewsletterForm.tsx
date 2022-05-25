import * as React from "react";
import Field from "../Form/Field/Field";
import Form from "../Form/Form";
import Typo from "../Typography/Typography";
import { motion, AnimatePresence } from "framer-motion";

interface INewsletterFormProps {}

const sendForm = async (data: any) => {
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
      <div className="w-full  max-w-lg mx-auto px-4">
        {steps === "init" && <RawForm handleSubmit={handleSubmit} />}
        {steps === "submitting" && <Submitting />}
        {steps === "success" && <Success />}
        {steps === "error" && <Error />}
      </div>
    </AnimatePresence>
  );
};
export default NewsletterForm;

const Animation: React.FC = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const RawForm: React.FC<{ handleSubmit: (data: any) => void }> = ({
  handleSubmit,
}) => {
  return (
    <Animation>
      <Form
        onSubmit={(v) => {
          handleSubmit(v);
        }}
        className="w-full  max-w-lg mx-auto"
      >
        <Typo variant="h3">Subscribe to our Newsletter</Typo>
        <Field
          name="email"
          placeholder="YOUR BEST EMAIL *"
          options={{ required: true }}
          type="email"
        />
        <Field
          className="hidden"
          name="company"
          placeholder="Company"
          type="text"
        />
      </Form>
    </Animation>
  );
};
const Submitting = () => {
  return (
    <Animation>
      <Typo>wait for it</Typo>
    </Animation>
  );
};
const Success = () => {
  return (
    <Animation>
      <Typo>looks good, you should get a mail</Typo>
    </Animation>
  );
};
const Error = () => {
  return (
    <Animation>
      <Typo>oh something went wrong...</Typo>
    </Animation>
  );
};
