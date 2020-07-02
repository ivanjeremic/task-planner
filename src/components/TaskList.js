import React, { useState, Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import StatusInfo from "./StatusInfo";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
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
  const [editMode, setEditMode] = useState({
    editID: null,
    editmodus: false,
    title: "",
    description: "",
  });
  const {
    tasks,
    setTasks,
    setEditTitle,
    editTitle,
    editDone,
    setEditDone,
    editDescription,
    setEditDescription,
    editInProgress,
    setEditInProgress,
  } = useAppState();

  /* ******************** */
  /* Remove Task function */
  /* ******************** */
  const removeTask = (index) => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTasks(newTodos);
  };

  /* ****************** */
  /* Edit Task function */
  /* ****************** */
  const editTask = (e, index) => {
    e.preventDefault();
    const newTodos = [...tasks];
    newTodos[index].title = editTitle;
    newTodos[index].description = editDescription;
    newTodos[index].done = editDone;
    newTodos[index].inprogress = editDone;
    setTasks(newTodos);
    setEditMode({
      editID: null,
      editmodus: false,
      title: "",
      description: "",
    });
    setEditTitle("");
    setEditDescription("");
    setEditDone("");
  };

  /* ************************************************** */
  /* Set the clicked task values in the Edit Task form. */
  /* ************************************************** */
  const runEditMode = (
    { title, description, taskid, editmodus, taskdone, taskinprogress },
  ) => {
    setEditTitle(title);
    setEditDescription(description);
    if (editDone === "done") {
      setEditDone(taskdone);
    }
    if (editDone === "inprogress") {
      setEditDone(taskinprogress);
    }
    setEditMode(
      {
        editID: taskid,
        editmodus: editmodus,
      },
    );
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
                    runEditMode(
                      {
                        title: task.title,
                        description: task.description,
                        taskid: task.id,
                        editmodus: true,
                        taskdone: task.done,
                        taskinprogress: task.inprogress,
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
                margin="dense"
                label="Title"
                type="text"
                fullWidth
                variant="outlined"
                value={editTitle === "" ? task.title : editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Description"
                type="text"
                multiline
                rowsMax={4}
                fullWidth
                variant="outlined"
                value={editDescription === ""
                  ? task.description
                  : editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
              <FormControl
                style={{ minWidth: 170, marginTop: "2em" }}
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  {task.done === "done" ? "Task Done" : ""}
                  {task.inprogress === "inprogress" ? "In Progress" : ""}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={editDone}
                  onChange={(e) => setEditDone(e.target.value)}
                  label="Status"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="done">Done</MenuItem>
                  <MenuItem value="inprogress">In Progress</MenuItem>
                </Select>
              </FormControl>
              <br />
              <Button
                style={{ margin: "1em", width: "130px" }}
                variant="contained"
                color="primary"
                disableElevation
                onClick={(e) => editTask(e, index)}
              >
                <p>EDIT</p>
              </Button>
            </div>
          </Fragment>
        ))}
      </List>
    </div>
  );
}
