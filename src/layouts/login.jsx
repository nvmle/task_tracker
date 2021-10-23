import React, { useState } from "react";
import TextField from "../components/forms/textField";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleChange = (target) => {
    console.log(target.target.value);

    setData((prevState) => ({
      ...prevState,
      [target.target.name]: target.target.value
    }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <button>Зарегистрироваться</button>
      </form>
    </>
  );
};

export default Login;
