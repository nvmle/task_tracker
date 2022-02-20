import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import cardService from "../services/card.service";
import { toast } from "react-toastify";

const CardContext = React.createContext();

export const useCard = () => {
  return useContext(CardContext);
};

const CardProvider = ({ children }) => {
  const [userCards, setUserCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      toast.error(error);
      setError(null);
    }
  }, [error]);

  async function getUserCards(arrayCardsId) {
    try {
      const cards = [];

      for (const cardId of arrayCardsId) {
        const cardInfo = await getCard(cardId);
        cards.push(cardInfo);
      }
      // console.log("cards", cards);

      setUserCards(cards);

      return cards;
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function getCard(cardId) {
    try {
      const data = await cardService.getById(cardId);

      return data;
    } catch (error) {
      errorCatcher(error);
    }
  }

  async function createNewCard(data) {
    try {
      const newCardContentData = {
        ...data,
        id: Math.random().toString(36).substr(2, 9)
      };
      console.log("createNewCard", data);
      console.log("newCardContentData", newCardContentData);

      const newCardContent = await cardService.create(newCardContentData);
      console.log("newCardContent", newCardContent);

      setUserCards((prevState) => [...prevState, newCardContent]);

      return newCardContent;
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher(error) {
    setError(error);
  }

  return (
    <CardContext.Provider
      value={{ getCard, getUserCards, userCards, createNewCard }}
    >
      {children}
    </CardContext.Provider>
  );
};
CardProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default CardProvider;
