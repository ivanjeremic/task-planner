import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import StatusList from "./StatusList";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useAppState } from "../context/StateContext";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function TaskList(props) {
  const {
    tasks,
    setTasks,
    editTitle,
    setEditTitle,
    editDescription,
    setEditDescription
  } = useAppState();

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    console.log("tasks", tasks);
    console.log("editTitle", editTitle);
    console.log("editDescription", editDescription);
  }, [editTitle, editDescription, tasks]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  let history = useHistory();

  function goToEditScreen() {
    setEditTitle("PleaseEditMe");
    history.push("/add-task");
  }

  const removeTask = index => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTasks(newTodos);
  };

  // Update existing todo item
  /* function editTask(event, id) {
    // Prepare new todos state
    const newTodosState = [...tasks];
    // Find correct todo item to update
    newTodosState.find(todo => todo.id === id).title = editTitle;
    // Update todos state
    setTasks(newTodosState);
  } */

  /* const editTask = (e, id) => {
    const newTodosState = [...tasks];
    // Find correct todo item to update
    newTodosState.find(todo => todo.id === id).title = "Hanf";
    newTodosState.find(todo => todo.id === id).description = "Moran";
    setTasks(newTodosState);
  }; */
  const editTask = id => {
    const newArr = tasks.map(tsk => {
      if (tsk.id === id) {
        return { ...tsk, title: "HOLOGRAM" };
      }
      return tsk;
    });
    setTasks(newArr);
  };

  return (
    <div>
      <StatusList tasks={tasks} />
      <Typography variant="h5" component="h2">
        My Tasks
      </Typography>
      <List className={classes.root}>
        {tasks.map((task, index) => (
          <div>
            <ListItem alignItems="flex-start">
              <ListItemText primary={task.title} secondary={task.description} />
              <IconButton onClick={handleClickOpen} aria-label="delete">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => removeTask(index)} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItem>
            <Divider />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To subscribe to this website, please enter your email address
                  here. We will send updates occasionally.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Title"
                  type="text"
                  fullWidth
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Description"
                  type="text"
                  fullWidth
                  value={editDescription}
                  onChange={e => setEditDescription(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={() => editTask(task.id)} color="primary">
                  Edit
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        ))}
      </List>
    </div>
  );
}
