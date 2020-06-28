import React from "react";
import CreateTaskScreenLayout from "../layouts/CreateTaskScreenLayout";

export default function CreateTaskScreen(props) {
  const { setTasts, tasks } = props;
  return <CreateTaskScreenLayout tasks={tasks} setTasts={setTasts} />;
}
