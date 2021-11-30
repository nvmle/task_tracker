import React, { useState, useEffect } from "react";

import CardsNavBar from "../components/ui/cardsNavBar";
import CardWrapper from "../components/common/Card";
import TasksBoard from "../components/common/tasksBoard";
import api from "../../api";
import useCard from "../hooks/useCard";

const Tasks = () => {
  const [cards, setCards] = useState([]);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  const { getCard } = useCard();

  // const arrayCardsId = [1];

  async function getCardd() {
    const card = await getCard(1);
    console.log(card);
    // await getUserCards(arrayCardsId);
  }

  getCardd();

  useEffect(() => {
    // setUser(JSON.parse(localStorage.getItem("user")));
    // const user = JSON.parse(localStorage.getItem("user"));

    user && api.cards.getCardsByUserId(user.id).then((data) => setCards(data));
  }, []);

  if (user) {
    if (cards) {
      return (
        <div className="container">
          <CardWrapper>
            <CardsNavBar cards={cards} />
          </CardWrapper>
          <TasksBoard cards={cards} />
        </div>
      );
    }
  }
  return (
    <>
      <h1>Войдите в систему!</h1>
    </>
  );
};

export default Tasks;
