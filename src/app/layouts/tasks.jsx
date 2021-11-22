import React from "react";
import Tag from "../components/common/tag";

import BoardsNavBar from "../components/ui/boardsNavBar";
import CardWrapper from "../components/common/Card";
import TasksBoard from "../components/common/tasksBoard";

const Tasks = () => {
  return (
    <div className="container">
      <CardWrapper>
        <BoardsNavBar />
      </CardWrapper>

      <TasksBoard />

      <Tag label="label" color="primary" />
    </div>
  );
};

export default Tasks;
