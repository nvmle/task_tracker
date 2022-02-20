import React from "react";
import CardWrapper from "../components/common/CardWrapper";
import { useCard } from "../hooks/useCard";

const Main = () => {
  const { getCard } = useCard();

  // const arrayCardsId = [1];

  async function getCardd() {
    const card = await getCard(1);
    console.log(card);
    // await getUserCards(arrayCardsId);
  }

  getCardd();

  const handleOn = () => {
    const userInfo = {
      id: "1", // "67rdca3eeb7f6fgeed471815",
      name: "Имя Фамилия",
      email: "johndorian@fastcompany.ru",
      password: "password",
      userCardsId: ["1"]
    };
    localStorage.setItem("user", JSON.stringify(userInfo));
  };

  const handleOff = () => {
    localStorage.removeItem("user");
  };

  return (
    <>
      <div className="container">
        <CardWrapper>
          <h1>Main</h1>
        </CardWrapper>

        <CardWrapper>
          <button className="btn btn-primary m-2" onClick={handleOn}>
            Войти
          </button>
          <button className="btn btn-primary m-2" onClick={handleOff}>
            Выйти
          </button>
        </CardWrapper>
      </div>
    </>
  );
};

export default Main;
