import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import BurgerMenu from '../components/BurgerMenu';
import DateTimeCalendar from '../components/DateTimeCalendar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    borderBottomLeftRadius: '50px',
    borderBottomRightRadius: '50px',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  button: {
    backgroundColor: '#007b83',
    color: '#ffffff',
  },
  // necessary for content to be below app bar
  toolbar: {
    height: 168,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  promitoolbar: {
    height: 168,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default function CalendarPage(props) {
  const classes = useStyles();
  const history = useHistory();

  /* ***************** */
  /* Navigate Add Task */
  /* ***************** */
  function navigateAddTask() {
    history.push('/add-task');
  }

  /* ****************** */
  /* Navigate back home */
  /* ****************** */
  function goBackHomeButton() {
    history.push('/');
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={classes.appBar}
        borderBottom={1}
        borderRadius={16}
      >
        <Toolbar className={classes.promitoolbar}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={goBackHomeButton}
            className={classes.menuButton}
          >
            <ArrowBackIcon />
          </IconButton>
          <div className={classes.title} noWrap>
            <Typography variant='h4' component='h4'>
              Today
            </Typography>
            <Typography variant='h6' component='h6'>
              Productive Day
            </Typography>
          </div>
          <Button
            variant='contained'
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={navigateAddTask}
          >
            Add task
          </Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            <BurgerMenu />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <DateTimeCalendar />
      </main>
    </div>
  );
}
