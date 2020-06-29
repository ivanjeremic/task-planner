import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "react-infinite-calendar/styles.css";
import HomeScreen from "./pages/HomeScreen";
import Calendar from "./components/Calender";
import HomeScreenLayout from "./layouts/HomeScreenLayout";
import CalendarScreenLayout from "./layouts/CalendarScreenLayout";
import CreateTaskScreen from "./pages/CreateTaskScreen";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarScreen from "./pages/CalendarScreen";
import { StateProvider } from "./context/StateContext";

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreenLayout>
            <HomeScreen />
          </HomeScreenLayout>
        </Route>
        <Route path="/calendar">
          <CalendarScreenLayout>
            <CalendarScreen />
          </CalendarScreenLayout>
        </Route>
        <Route path="/add-task">
          <CreateTaskScreen />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <RouterComponent />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
