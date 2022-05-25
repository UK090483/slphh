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
      readOnly={isSubmitting}
      placeholder={placeholder}
      className={clsx(
        "w-full transition-all bg-primary text-white placeholder:text-white  placeholder:text-center placeholder:font-bold rounded-full border-2 border-primary",
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
