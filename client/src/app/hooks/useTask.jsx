import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import taskService from "../services/task.service";

const TaskContext = React.createContext();

export const useTask = () => {
  return useContext(TaskContext);
};

const TaskProvider = ({ children }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      toast.error(error);
      setError(null);
    }
  }, [error]);

  async function getTask(taskId) {
    try {
      const data = await taskService.getById(taskId);
      console.log("useTask data", data);

      return data;
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher(error) {
    setError(error);
  }

  return (
    <TaskContext.Provider value={{ getTask }}>{children}</TaskContext.Provider>
  );
};
TaskProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default TaskProvider;
