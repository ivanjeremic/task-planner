import React, { Fragment } from "react";
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
  const { tasks, setTasts } = props;
  const classes = useStyles();

  const removeTask = index => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTasts(newTodos);
  };

  return (
    <div>
      <StatusList tasks={tasks} setTasts={setTasts} />
      <Typography variant="h5" component="h2">
        My Tasks
      </Typography>
      <List className={classes.root}>
        {tasks.map((task, index) => (
          <Fragment>
            <ListItem alignItems="flex-start">
              <ListItemText primary={task.title} secondary={task.description} />
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => removeTask(index)} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </div>
  );
}
