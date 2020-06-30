import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import StatusInfo from './StatusInfo';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useAppState } from '../context/StateContext';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function TaskList(props) {
  const [savedIndex, setIndex] = React.useState(null);
  const { setOpen, tasks, setTasks } = useAppState();

  const handleClickOpen = (index) => {
    setIndex(index);
    setOpen(true);
    console.log('savedIndex', savedIndex);
  };

  const classes = useStyles();

  const removeTask = (index) => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTasks(newTodos);
  };

  const editTask = (index) => {
    const newTodos = [...tasks];
    newTodos[index].title = 'Bregovic';
    newTodos[index].description = 'Karola';
    /* newTodos[index].status = "done"; */
    setTasks(newTodos);
  };

  return (
    <div>
      <StatusInfo tasks={tasks} />
      <Typography variant='h5' component='h2'>
        My Tasks
      </Typography>
      <List className={classes.root}>
        {tasks.map((task, index) => (
          <div>
            <ListItem alignItems='flex-start'>
              <ListItemText primary={task.title} secondary={task.description} />
              <IconButton onClick={() => handleClickOpen(index)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => removeTask(index)}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => editTask(index)}>
                <p>ED</p>
              </IconButton>
            </ListItem>
            <Divider />
            <EditDialog editTask={editTask} index={index} />
          </div>
        ))}
      </List>
    </div>
  );
}

const EditDialog = ({ editTask, index }) => {
  const {
    open,
    setOpen,
    editTitle,
    setEditTitle,
    editDescription,
    setEditDescription,
  } = useAppState();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Title'
          type='text'
          fullWidth
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Description'
          type='text'
          fullWidth
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={() => editTask(index)} color='primary'>
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
