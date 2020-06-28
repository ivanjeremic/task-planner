import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "react-infinite-calendar/styles.css";
import HomeScreen from "./pages/HomeScreen";
import Calendar from "./components/Calender";
import HomeScreenLayout from "./layouts/HomeScreenLayout";
import CalendarScreenLayout from "./layouts/CalendarScreenLayout";
import CreateTaskScreen from "./pages/CreateTaskScreen";

function RouterComponent() {
  const [tasks, setTasts] = useState([
    {
      title: "Joes",
      description: "lorem hjaskj wlkd",
      date: "22.06.1989",
      time: "22:00",
      status: "open"
    }
  ]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreenLayout>
            <HomeScreen tasks={tasks} setTasts={setTasts} />
          </HomeScreenLayout>
        </Route>
        <Route path="/calendar">
          <CalendarScreenLayout>
            <Calendar />
          </CalendarScreenLayout>
        </Route>
        <Route path="/add-task">
          <CreateTaskScreen tasks={tasks} setTasts={setTasts} />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
