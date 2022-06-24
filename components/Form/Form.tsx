import clsx from "clsx";
import * as React from "react";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  FieldValues,
  UseFormProps,
} from "react-hook-form";

interface IFormProps<TFieldValues extends FieldValues> {
  onSubmit: SubmitHandler<TFieldValues>;
  children?: React.ReactNode | undefined;
  options?: UseFormProps<TFieldValues>;
  className?: string;
}

function Form<TFieldValues extends FieldValues>(
  props: IFormProps<TFieldValues>
) {
  const { children, options, className, onSubmit } = props;
  const methods = useForm<TFieldValues>(options);

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        noValidate={true}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
        <button
          className={clsx(
            "mt-8 w-full  border-2 border-black bg-black text-white py-2 rounded-full"
          )}
          type="submit"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
}
export default Form;
