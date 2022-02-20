import React from "react";
import { Route, Switch } from "react-router-dom";
import Tasks from "./layouts/tasks";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import CardProvider from "./hooks/useCard";
import { ToastContainer } from "react-toastify";
import TaskProvider from "./hooks/useTask";
import AuthProvider from "./hooks/useAuth";
import UserProvider from "./hooks/useUser";

function App() {
  return (
    <div>
      <AuthProvider>
        <UserProvider>
          <CardProvider>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/login/:type?" component={Login} />
              <TaskProvider>
                <Route path="/tasks/:taskId?/:edit?" component={Tasks} />;
              </TaskProvider>
            </Switch>
          </CardProvider>
        </UserProvider>
      </AuthProvider>

      <ToastContainer />
    </div>
  );
}

export default App;
