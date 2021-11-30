import React from "react";
// import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import CheckBoxField from "./forms/checkBoxField";
import CardWrapper from "./common/Card";
import Tag from "./common/tag";

const Task = ({ task }) => {
  return (
    <CardWrapper>
      <div className="row gutters-sm">
        <div className="col-md-3 mb-3">
          <CheckBoxField>{task.title}</CheckBoxField>
          <p>{task.description}</p>
          <p>{task.deadline}</p>
          <Tag label={task.importance.name} color={task.importance.color} />
        </div>
      </div>
    </CardWrapper>
  );
};
Task.propTypes = {
  task: PropTypes.object
};
export default Task;
