import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import StatusInfo from "./StatusInfo";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useAppState } from "../context/StateContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function TaskList(props) {
  const classes = useStyles();
  const [savedIndex, setIndex] = useState(null);
  const [editMode, setEditMode] = useState({
    editID: null,
    editmodus: false,
    title: "",
    description: "",
  });
  const {
    setOpen,
    tasks,
    setTasks,
    setEditTitle,
    editTitle,
    editDescription,
    setEditDescription,
  } = useAppState();

  /* ***************** */
  /* Edit Task function*/
  /* ***************** */
  const editTaskHandler = (index) => {
    setIndex(index);
    setOpen(true);
  };

  /* ******************** */
  /* Remove Task function */
  /* ******************** */
  const removeTask = (index) => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTasks(newTodos);
  };

  /* ***************** */
  /* Edit Task function  TESTING OD*/
  /* ***************** */
  const editTask = (index) => {
    const newTodos = [...tasks];
    newTodos[index].title = editTitle;
    newTodos[index].description = editDescription;
    /* newTodos[index].status = "done"; */
    setTasks(newTodos);
    setEditMode({
      editID: null,
      editmodus: false,
      title: "",
      description: "",
    });
  };

  return (
    <div>
      <Typography
        variant="h5"
        component="h2"
        style={editMode.editmodus === false ? { display: "none" } : null}
      >
        Edit Task
      </Typography>
      <div style={editMode.editmodus === true ? { display: "none" } : null}>
        <StatusInfo tasks={tasks} />
        <Typography variant="h5" component="h2">
          My Tasks
        </Typography>
      </div>
      <List className={classes.root}>
        {tasks.map((task, index) => (
          <Fragment>
            <div
              style={editMode.editmodus === true ? { display: "none" } : null}
            >
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={task.title}
                  secondary={task.description}
                />
                <IconButton
                  onClick={() =>
                    setEditMode(
                      {
                        editID: task.id,
                        editmodus: true,
                        title: task.title,
                        description: task.description,
                      },
                    )}
                >
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => removeTask(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider />
            </div>
            <div
              style={editMode.editID !== task.id ? { display: "none" } : null}
            >
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Title"
                type="text"
                fullWidth
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Description"
                type="text"
                fullWidth
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
              <IconButton onClick={() => editTask(index)}>
                <p>EDIT</p>
              </IconButton>
            </div>
          </Fragment>
        ))}
      </List>
    </div>
  );
}
