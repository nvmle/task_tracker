import React from "react";
import { Route, Switch } from "react-router-dom";
import Task from "./components/task";
import Tasks from "./layouts/tasks";
import Login from "./layouts/login";
import Registration from "./layouts/registration";
import CreateTask from "./layouts/createTask";
import EditTask from "./layouts/editTask";
import NavBar from "./components/ui/navBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/tasks/:taskId?" component={Task} />;
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        {/* <Route path="/tasks" component={Tasks} /> */}
        <Route path="/create/:taskId?" component={CreateTask} />
        <Route path="/edit/:taskId?" component={EditTask} />
        <Route path="/" component={Tasks} />
      </Switch>
    </div>
  );
}

export default App;
