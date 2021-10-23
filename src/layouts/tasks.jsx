import React, { useEffect, useState } from "react";
import api from "../api";

const Tasks = () => {
  // const [tasks, setTasks] = useState();
  const [taskBoards, setTaskBoards] = useState();

  useEffect(() => {
    api.tasks.fetchAll().then((data) => console.log(data));
  }, []);

  useEffect(() => {
    console.log(api.taskBoards);
    setTaskBoards(api.taskBoards);
  }, []);
  return (
    <div>
      <div>{taskBoards ? "taksssss" : "task"}</div>
    </div>
  );
};

export default Tasks;
