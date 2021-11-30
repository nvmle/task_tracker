import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CardWrapper from "./Card";

import api from "../../../api";
import Task from "../task";

const TasksCard = ({ card }) => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    // api.tasks.fetchAll().then((data) => setTasks(data));

    api.tasks.getTaskByBelongCard(card.id).then((data) => setTasks(data));
  }, []);

  return (
    <CardWrapper>
      <div>{card.title}</div>
      {tasks
        ? tasks.map((task) => <Task key={task.id} task={task} />)
        : "loading..."}
    </CardWrapper>
  );
};
TasksCard.propTypes = {
  card: PropTypes.object
};

export default TasksCard;
