import React, { FC, InputHTMLAttributes } from "react";

import { Controller, useFormContext } from "react-hook-form";

type TInputController = {
  name: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

//style
import style from "./inputController.module.scss";
import styles from "@features/faq-main/faq.module.scss";

const InputController: FC<TInputController> = (props) => {
  const { name, label, ...rest } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message;
  const isError = errorMessage ? style.error : "";

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={style.wrapper}>
          {label && (
            <label htmlFor={`form-field-${name}`} className={style.label}>
              {label}
            </label>
          )}
          <input
            {...field}
            {...rest}
            type="text"
            id={`form-field-${name}`}
            className={`${style.input} ${isError}`}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      )}
    />
  );
};

export default InputController;
