import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalendarPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import { StateProvider } from "./context/StateContext";
import "react-big-calendar/lib/css/react-big-calendar.css";

/* ************************************************************************************ */
/* This is our Router for redirecting us to a new view and render the needed Compnents */
/* ************************************************************************************ */
function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/add-task" component={CreateTaskPage} />
      </Switch>
    </Router>
  );
}

/* *********************************************************************************************** */
/* Our App entrypoint wich targets the 'div' with the id "root", we render our RouterComponent here */
/* *********************************************************************************************** */
ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <RouterComponent />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
