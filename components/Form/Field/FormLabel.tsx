import React from "react";
import { useFieldContext } from "./FieldContext";

export const FormLabel: React.FC = () => {
  const { label, name } = useFieldContext();
  if (!label) return null;
  return (
    <label
      className=" flex  items-end  whitespace-nowrap leading-none pr-2  "
      htmlFor={name}
    >
      {label} :
    </label>
  );
};
