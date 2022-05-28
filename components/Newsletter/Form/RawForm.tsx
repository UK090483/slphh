import * as React from "react";
import Field from "../../Form/Field/Field";
import Form from "../../Form/Form";
import { Animation } from "./Animation";

export const RawForm: React.FC<{ handleSubmit: (data: any) => void }> = ({
  handleSubmit,
}) => {
  return (
    <Animation className="max-w-lg mx-auto">
      <Form
        onSubmit={(v) => {
          handleSubmit(v);
        }}
        className="w-full  max-w-lg mx-auto"
      >
        <Field
          label="Email*"
          name="email"
          type="email"
          options={{
            required: { message: "email is required", value: true },
            pattern: {
              message: "looks like there is something wrong with the email",
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            },
          }}
        />
        <Field label="First Name" name="first-name" type="text" />
        <Field label="Last Name" name="family-name" type="text" />
        <Field label="Company" name="company" type="text" />
      </Form>
    </Animation>
  );
};
