/* eslint-disable react/display-name */
import clsx from "clsx";
import React, { InputHTMLAttributes } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { FieldContextProvider, useFieldContext } from "./FieldContext";
import { FieldError } from "./FieldError";
import { FormLabel } from "./FormLabel";
import { Input } from "./Input";

export interface IFieldProps extends Pick<InputHTMLAttributes<any>, "type"> {
  name: string;
  label?: string;
  placeholder?: string;
  options?: RegisterOptions;
  className?: string;
}

const Field: React.FunctionComponent<IFieldProps> = (props) => {
  const {
    formState: { isSubmitting, errors },
  } = useFormContext();

  const { name, children } = props;

  const hasError = !!errors[name];

  return (
    <FieldContextProvider {...props}>
      <div
        className={clsx(
          "w-full relative md:pt-4 pb-4 md:pb-6 px-2 transition-all text-base-mobile md:text-base border-0  border-t-2  border-transparent   rounded-sm  ",
          {
            "opacity-50 ": isSubmitting,
            "bg-red bg-opacity-20": hasError,
            " focus-within:bg-secondary  focus-within:bg-opacity-50 ":
              !hasError,
          },
          props.className
        )}
      >
        <div className=" grid grid-rows-2 gap-2 sm:grid-rows-1 sm:gap-0 sm:grid-cols-[100px_1fr]  md:grid-cols-[120px_1fr] ">
          <FormLabel />

          {children ? children : <Input />}
        </div>

        <FieldError />
      </div>
    </FieldContextProvider>
  );
};

export default Field;
