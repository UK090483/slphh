import React from "react";
import { useFormContext } from "react-hook-form";
import { useFieldContext } from "./FieldContext";

export const FieldError: React.FC = () => {
  const { name } = useFieldContext();
  const {
    formState: { errors },
  } = useFormContext();
  if (!errors[name]) return null;

  return (
    <div data-testid={`error-message-${name}`} className="">
      <p className="absolute bottom-1 animate-slideUp text-red text-sm italic pb-0 leading-none ">
        {errors[name]?.message || "something is wrong"}
      </p>
    </div>
  );
};
