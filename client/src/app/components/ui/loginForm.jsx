import React, { useEffect, useState } from "react";
import TextField from "../forms/textField";
import { validator } from "../../utils/validator";
import CheckBoxField from "../forms/checkBoxField";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "", stayOn: false });
  const [errors, setErrors] = useState({});
  const [enterError, setEnterError] = useState(null);

  const history = useHistory();

  const { signIn } = useAuth();

  useEffect(() => {
    validate();
  }, [data]);

  const validateConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения"
      }
    },
    password: {
      isRequired: { message: "Пароль обязателен для заполнения" }
    }
  };

  const validate = () => {
    const errors = validator(data, validateConfig);
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log("data", data);

    try {
      await signIn(data);
      history.push("/tasks");
    } catch (error) {
      setEnterError(error.message);
    }
  };

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    setEnterError(null);
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
        {enterError && <p className="text-danger">{enterError}</p>}

        <button className="btn btn-primary" disabled={!isValid}>
          Войти
        </button>
      </form>
    </>
  );
};

export default LoginForm;
