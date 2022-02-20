import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import CheckBoxField from "./forms/checkBoxField";
import CardWrapper from "./common/CardWrapper";
// import Tag from "./common/tag";
import { useTask } from "../hooks/useTask";

const Task = ({ taskId }) => {
  const [task, setTask] = useState();
  const { getTask } = useTask();

  console.log("task data111111111111");

  useEffect(async () => {
    const data = await getTask(taskId);

    console.log("task data", data);
    setTask(data);
  }, []);

  return (
    <CardWrapper>
      {task ? (
        <div className="row gutters-sm">
          <div className="col-md-3 mb-3">
            <CheckBoxField>{task.title}</CheckBoxField>
            <p>{task.description}</p>
            <p>{task.deadline}</p>
            {/* <Tag label={task.importance.name} color={task.importance.color} /> */}
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </CardWrapper>
  );
};
Task.propTypes = {
  task: PropTypes.object,
  taskId: PropTypes.number
};
export default Task;
