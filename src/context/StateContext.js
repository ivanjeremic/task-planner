import React, { createContext, useState, useContext } from "react";

/* *************************************************** */
/* Create the Context wich holds the State of the App. */
/* *************************************************** */
const StateContext = createContext();

/* **************************************************************************** */
/* Create the Provider, this is used to wrap around components that need State. */
/* **************************************************************************** */
const StateProvider = (props) => {
  const { children } = props;

  /* ************************************** */
  /* Our States, created with useState Hook */
  /* ************************************** */
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Poland",
      description: "something",
      done: "done",
      inprogress: "",
    },
  ]);
  const [title, setTitle] = useState("");
  const [descrip, setdescrip] = useState("");
  const [open, setOpen] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [done, setDone] = useState("");
  const [editDone, setEditDone] = useState("");
  const [editInProgress, setEditInProgress] = useState("");
  const [inprogress, setInProgress] = useState("");

  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  /* return the StateContext Provider wich will take any component as children,
  /* the Prop 'value={{}}' holds all our State & Function we need in our app,
  /* we can use it with the 'useAppState hook we export'
  /* ************************************************************************** */
  return (
    <StateContext.Provider
      value={{
        open,
        setOpen,
        tasks,
        title,
        setTitle,
        descrip,
        setdescrip,
        setTasks,
        editTitle,
        setEditTitle,
        editDescription,
        setEditDescription,
        done,
        setDone,
        inprogress,
        setInProgress,
        editDone,
        setEditDone,
        editInProgress,
        setEditInProgress,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

/* ************************************************************************************************* */
/* This useAppState hook can be used in any file wich is inside the provider to read/write to State. */
/* ************************************************************************************************* */
const useAppState = () => useContext(StateContext);

/* *************************************************************************************** */
/* export the Provider to provide State & the Hook useAppState to use it in our components */
/* *************************************************************************************** */
export { StateProvider, useAppState };
