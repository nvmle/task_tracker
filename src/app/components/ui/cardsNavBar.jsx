import React from "react";
// import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
// import api from "../../../api";

const CardsNavBar = ({ cards }) => {
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));

  //   api.cards.getCardsByUserId(user.id).then((data) => setCards(data));
  // }, []);

  return cards ? (
    <>
      <ul className="nav nav-tabs">
        {Object.keys(cards).map((card) => (
          <li key={cards[card].id} className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              {cards[card].label}
            </a>
          </li>
        ))}
      </ul>
    </>
  ) : (
    "Loading..."
  );
};
CardsNavBar.propTypes = {
  cards: PropTypes.array
};

export default CardsNavBar;

// const [boards, setBoards] = useState();
// useEffect(() => {
//   api.taskBoards.fetchAll().then((data) => {
//     setBoards(data);
//   });
// }, []);

// return boards ? (
//   <>
//     <ul className="nav nav-tabs">
//       {Object.keys(boards).map((board) => (
//         <li key={boards[board].id} className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">
//             {boards[board].title}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </>
// ) : (
//   "Loading..."
// );
