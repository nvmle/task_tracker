import React, { useEffect, useState } from "react";
import TextField from "../forms/textField";
import { validator } from "../../utils/validator";
import CheckBoxField from "../forms/checkBoxField";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "", stayOn: false });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [data]);

  const validateConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения"
      },
      isEmail: {
        message: "Электронная почта введена некорректно"
      }
    },
    password: {
      isRequired: { message: "Пароль обязателен для заполнения" },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву"
      },
      isContainDigit: { message: "Пароль должен содержать хотя бы одну цифру" },
      min: { message: "Пароль должен содержать минимум 8 символов", value: 8 }
    }
  };

  const validate = () => {
    const errors = validator(data, validateConfig);
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log("data", data);
  };

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name={"email"}
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          label="Password"
          type="password"
          name={"password"}
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />

        <CheckBoxField
          name="stayOn"
          value={data.stayOn}
          onChange={handleChange}
        >
          Оставаться в системе
        </CheckBoxField>
        <button className="btn btn-primary" disabled={!isValid}>
          Войти
        </button>
      </form>
    </>
  );
};

export default LoginForm;
