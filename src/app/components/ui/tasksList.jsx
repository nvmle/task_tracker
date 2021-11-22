import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types'
import api from "../../../api";
import Task from "../task";

const TasksList = () => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    api.tasks.fetchAll().then((data) => setTasks(data));
  }, []);

  return tasks ? (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}{" "}
    </div>
  ) : (
    "loading..."
  );
};
// TaskList.propTypes = {}

export default TasksList;
