import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const StateContext = createContext();

const StateProvider = props => {
  const { children } = props;
  // initial State
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "one",
      description: "oneddd",
      status: "inprogress"
    },
    {
      id: uuidv4(),
      title: "two",
      description: "twoddd",
      status: "open"
    },
    {
      id: uuidv4(),
      title: "tree",
      description: "done"
    }
  ]);
  const [title, setTitle] = React.useState("");
  const [descrip, setdescrip] = React.useState("");
  const [status, setStatus] = React.useState("");
  // Edit State
  const [editTitle, setEditTitle] = React.useState("");
  const [editDescription, setEditDescription] = React.useState("");

  return (
    <StateContext.Provider
      value={{
        status,
        setStatus,
        tasks,
        title,
        setTitle,
        descrip,
        setdescrip,
        setTasks,
        editTitle,
        setEditTitle,
        editDescription,
        setEditDescription
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

const useAppState = () => useContext(StateContext);

export { StateProvider, useAppState };
