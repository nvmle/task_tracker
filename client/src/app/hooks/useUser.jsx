import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import userService from "../services/user.service";
import { toast } from "react-toastify";

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      toast.error(error);
      setError(null);
    }
  }, [error]);

  async function addCardToUserCardsList(user, cardId) {
    try {
      let userCardsIdArray = [];
      console.log("user", user);
      console.log("cardId", cardId);
      console.log("userCardId", user.userCardsId);
      userCardsIdArray = user.userCardsId;
      console.log(userCardsIdArray);
      userCardsIdArray.push(cardId);
      console.log(userCardsIdArray);
      user.userCardsId = userCardsIdArray;
      console.log("userCardId", user.userCardsId);

      const data = await userService.edit(user);
      console.log(data);

      // const userData = {...user, user.userCardsId: }
      // const data = await userService.edit(userData)
    } catch (error) {
      errorCatcher(error);
    }
  }
  function errorCatcher(error) {
    setError(error);
  }
  return (
    <UserContext.Provider value={{ addCardToUserCardsList }}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default UserProvider;
