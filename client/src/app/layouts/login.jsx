import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "registration" ? type : "login"
  );

  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === "registration" ? "login" : "registration"
    );
  };
  return (
    <div className="constainer mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {formType === "registration" ? (
            <>
              <h3 className="mb-3">Регистрация</h3>
              <RegisterForm />
              <p>
                Уже есть аккаунт?{" "}
                <a role="button" onClick={toggleFormType}>
                  Войти
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-3">Вход в аккаунт</h3>
              <LoginForm />
              <p>
                Еще не зарегистрированы?{" "}
                <a role="button" onClick={toggleFormType}>
                  Зарегистрироваться
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
