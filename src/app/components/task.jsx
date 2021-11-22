import React from "react";
// import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import CheckBoxField from "./forms/checkBoxField";
import CardWrapper from "./common/Card";

const Task = ({ task }) => {
  console.log(task);

  // const params = useParams();
  // const { taskId } = params;
  // console.log("params", params);

  // console.log(taskId);

  // return <h1>Task {taskId}</h1>;
  return (
    <CardWrapper>
      <CheckBoxField />
      {task.title}
    </CardWrapper>
  );
};
Task.propTypes = {
  task: PropTypes.object
};
export default Task;
