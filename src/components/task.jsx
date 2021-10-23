import React from "react";
import { useParams } from "react-router-dom";

const Task = () => {
  const params = useParams();
  const { taskId } = params;
  // console.log("params", params);

  // console.log(taskId);

  return <h1>Task {taskId}</h1>;
};

export default Task;
