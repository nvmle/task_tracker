import React from "react";
import PropTypes from "prop-types";
import CardWrapper from "./Card";
import TasksList from "../ui/tasksList";

const TasksCard = ({ tasks }) => {
  return (
    <>
      <div>TasksCard</div>
      <CardWrapper>
        <TasksList />
      </CardWrapper>
    </>
  );
};
TasksCard.propTypes = {
  tasks: PropTypes.array
};

export default TasksCard;
