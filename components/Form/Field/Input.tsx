import clsx from "clsx";
import React from "react";
import { useFormContext } from "react-hook-form";
import { useFieldContext } from "./FieldContext";

export const Input: React.FC = () => {
  const { name, type, placeholder, options } = useFieldContext();
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  if (!name) return null;
  return (
    <input
      style={{ backgroundColor: "transparent" }}
      readOnly={isSubmitting}
      placeholder={placeholder}
      className={clsx(
        "w-full pt-4 pl-2 leading-none flex justify-center  transition-all border-dotted border-0 border-b-2  border-primary p-0 focus:outline-dotted  focus:outline-0 outline-primary  placeholder:text-center placeholder:font-bold ",
        {
          "border-red": !!errors[name],
        }
      )}
      id={name}
      type={type}
      {...register(name, options)}
    />
  );
};
