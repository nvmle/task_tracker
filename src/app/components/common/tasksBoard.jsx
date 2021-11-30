import React from "react";
import PropTypes from "prop-types";
import TasksCard from "./tasksCard";

const TasksBoard = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <TasksCard key={card.id} card={card} />
      ))}
      {/* <TasksCard /> */}
    </>
  );
};
TasksBoard.propTypes = {
  cards: PropTypes.array
};

export default TasksBoard;
