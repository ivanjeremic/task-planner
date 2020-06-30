import React from 'react';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: {
    height: 128,
  },
}));

export default function BurgerMenu() {
  const classes = useStyles();
  let history = useHistory();

  /* ************* */
  /* Navigate to Home */
  /* ************* */
  function navigateHome() {
    history.push('/');
  }

  /* ***************** */
  /* Navigate to Calendar */
  /* ***************** */
  function navigateCalendar() {
    history.push('/calendar');
  }

  /* ***************** */
  /* Navigate to Add task */
  /* ***************** */
  function navigateAddTask() {
    history.push('/add-task');
  }

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key='home1' onClick={navigateHome}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button key='home1' onClick={navigateCalendar}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='Calendar' />
        </ListItem>
        <ListItem button key='home1' onClick={navigateAddTask}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='Add task' />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}
