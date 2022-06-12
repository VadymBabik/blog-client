import React, { FormEventHandler, ReactNode } from 'react';
import {ClassName, FormMethod, ID} from "../../types/field";

interface FormProps {
  children: ReactNode;
  className?: ClassName;
  method?: FormMethod;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  id?: ID;
}

function Form({
  children,
  className,
  id,
  method = FormMethod.POST,
  onSubmit
}: FormProps) {
  return (
    <form className={className} id={id} method={method} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
