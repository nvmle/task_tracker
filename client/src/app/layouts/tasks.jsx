import React, { useState, useEffect } from "react";

import CardsNavBar from "../components/ui/cardsNavBar";
import CardWrapper from "../components/common/CardWrapper";
import TasksBoard from "../components/common/tasksBoard";
import { useCard } from "../hooks/useCard";
import { useAuth } from "../hooks/useAuth";

// import userService from "../services/user.service";

const Tasks = () => {
  const [cards, setCards] = useState([]);

  // const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [user, setUser] = useState({});

  // const { getCard, getUserCards, userCards } = useCard();
  const { userCards, getUserCards } = useCard();

  const { currentUser } = useAuth();

  // console.log("TASKS RENDER", cards, user, userCards, currentUser);

  // useEffect(async () => {
  //   const userInfo = await userService.getUserInfo(currentUser);
  //   console.log("userInfo", userInfo);
  //   await setUser(userInfo);

  //   if (userInfo?.userCardsId) {
  //     console.log(userInfo.userCardsId);
  //     console.log(user.userCardsId);

  //     const c = await getUserCards(user.userCardsId);
  //     console.log(c);
  //   } else {
  //     console.log("пусто");
  //   }
  // }, [currentUser]);

  useEffect(() => {
    setCards(userCards);
  }, [userCards]);

  useEffect(async () => {
    setUser(currentUser);
    if (currentUser?.userCardsId) {
      const cardsList = await getUserCards(currentUser.userCardsId);
      console.log("cardsList", cardsList);
      console.log(userCards);

      console.log(user);

      // api.cards.getCardsByUserId(currentUser.id).then((data) => setCards(data));
      setCards(cardsList);
    } else {
      console.log("пусто");
    }
  }, [currentUser]);

  // console.log("userCards", userCards);

  // const arrayCardsId = [1];

  // useEffect(async () => {
  //   const card = await getCard(1);
  //   console.log(card);
  //   await getUserCards(arrayCardsId);
  // }, [user]);

  // useEffect(() => {
  //   // setUser(JSON.parse(localStorage.getItem("user")));
  //   // const user = JSON.parse(localStorage.getItem("user"));
  //   user && api.cards.getCardsByUserId(user.id).then((data) => setCards(data));

  //   // const userCards =
  // }, [user]);

  if (currentUser) {
    // if (cards) {
    return (
      <div className="container">
        <CardWrapper>
          <CardsNavBar cards={cards} />
          <TasksBoard cards={cards} />
        </CardWrapper>
      </div>
    );
    // }
    // return "Loading...";
  }
  return (
    <>
      <h1>Войдите в систему!</h1>
      {/* {userCards ? (
        <div className="container">
          <CardWrapper>
            <CardsNavBar cards={userCards} />
          </CardWrapper>
          <TasksBoard cards={userCards} />
        </div>
      ) : (
        "loading"
      )} */}
    </>
  );
};

export default Tasks;
