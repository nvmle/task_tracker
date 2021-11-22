import React, { useState, useEffect } from "react";
import api from "../../../api";

const BoardsNavBar = () => {
  const [boards, setBoards] = useState();
  useEffect(() => {
    api.taskBoards.fetchAll().then((data) => {
      setBoards(data);
    });
  }, []);

  return boards ? (
    <>
      <ul className="nav nav-tabs">
        {Object.keys(boards).map((board) => (
          <li key={boards[board].id} className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              {boards[board].title}
            </a>
          </li>
        ))}
      </ul>
    </>
  ) : (
    "Loading..."
  );
};

export default BoardsNavBar;
