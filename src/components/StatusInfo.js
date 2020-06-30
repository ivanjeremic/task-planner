import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FlareIcon from '@material-ui/icons/Flare';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  demo: {
    width: '100%',
  },
  calendarbtn: {
    backgroundColor: '#007b83',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#007b83',
    },
  },
}));

export default function StatusInfo(props) {
  const { tasks } = props;

  const classes = useStyles();
  let history = useHistory();

  /* ******************** */
  /* Navigate to Calendar */
  /* ******************** */
  function handleClick() {
    history.push('/calendar');
  }

  return (
    <div>
      <Grid spacing={2}>
        <Grid item>
          <div className={classes.demo}>
            <List>
              <ListItem>
                <Typography variant='h5' component='h2'>
                  Task Status
                </Typography>
                <ListItemSecondaryAction>
                  <IconButton
                    className={classes.calendarbtn}
                    edge='end'
                    onClick={handleClick}
                  >
                    <DateRangeIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ background: '#e36472' }}>
              <ScheduleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='To Do'
            secondary={`${tasks.length} tasks - 0 started`}
          />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ background: '#f6c07a' }}>
              <FlareIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='In Progress' secondary='0 tasks in progress' />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ background: '#6588e4' }}>
              <DoneAllIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Done' secondary='0 tasks done' />
        </ListItem>
      </List>
    </div>
  );
}
