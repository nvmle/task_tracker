import React from "react";
import { Route, Switch } from "react-router-dom";
import Tasks from "./layouts/tasks";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import CardProvider from "./hooks/useCard";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <CardProvider>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login/:type?" component={Login} />
          <Route path="/tasks/:taskId?/:edit?" component={Tasks} />;
        </Switch>
      </CardProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
