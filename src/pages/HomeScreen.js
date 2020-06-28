import React from "react";
import TaskList from "../components/TaskList";

function HomeScreen(props) {
  const { tasks, setTasts } = props;
  return <TaskList tasks={tasks} setTasts={setTasts} />;
}

export default HomeScreen;
