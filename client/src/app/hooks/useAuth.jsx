import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import userService from "../services/user.service";
import { setTokens } from "../services/localStorage.service";

const httpAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY
  }
});

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      console.log(error);

      setError(null);
    }
  }, [error]);

  async function getUserInfo(userId) {
    const data = await userService.getUserInfo(userId);

    console.log("USR INFO AUTH", data);
    setCurrentUser(data);
  }

  async function createUser(data) {
    console.log("createUser", data);

    const userData = await userService.create(data);
    console.log("createUser userData", userData);
  }

  async function signIn({ email, password }) {
    try {
      const { data } = await httpAuth.post("accounts:signInWithPassword", {
        email,
        password,
        returnSecureToken: true
      });
      console.log(data);

      setTokens(data);

      await getUserInfo(data.localId);
    } catch (error) {
      errorCatcher(error);

      const { code, message } = error.response.data.error;
      if (code === 400) {
        switch (message) {
          case "EMAIL_NOT_FOUND":
            throw new Error("Email или пароль введены не верно");

          case "INVALID_PASSWORD":
            throw new Error("Email или пароль введены не верно");

          default:
            throw new Error("Слишком много попыток входа. Попробуйте позднее");
        }
      }
    }
  }

  async function signUp({ email, password, ...rest }) {
    try {
      const { data } = await httpAuth.post("accounts:signUp", {
        email,
        password,
        returnSecureToken: true
      });

      setTokens(data);

      await createUser({ id: data.localId, email, ...rest });
    } catch (error) {
      errorCatcher(error);

      const { code, message } = error.response.data.error;

      if (code === 400) {
        if (message === "EMAIL_EXISTS") {
          const errorObject = {
            email: "Пользователь с таким Email уже существует"
          };
          throw errorObject;
        }
      }
    }
  }

  function errorCatcher(error) {
    setError(error);
  }

  return (
    <AuthContext.Provider value={{ signUp, signIn, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AuthProvider;
