import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import CreateTaskPage from './pages/CreateTaskPage';
import { StateProvider } from './context/StateContext';
import 'react-big-calendar/lib/css/react-big-calendar.css';

/* ************************************************************************************ */
/* This is our Router wich is redirect us to a new view and render the needed Compnents */
/* ************************************************************************************ */
function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/calendar'>
          <CalendarPage />
        </Route>
        <Route path='/add-task'>
          <CreateTaskPage />
        </Route>
      </Switch>
    </Router>
  );
}

/* *********************************************************************************************** */
/* Our App entypoint wich targets the 'div' with the id "root", we render our RouterComponent here */
/* *********************************************************************************************** */
ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <RouterComponent />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
