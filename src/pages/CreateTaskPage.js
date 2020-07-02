import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import BurgerMenu from "../components/BurgerMenu";
import { useAppState } from "../context/StateContext";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#f9be7c",
    color: "#000000",
    borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: {
    height: 168,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  promitoolbar: {
    minHeight: 168,
    alignItems: "flex-start",
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
    alignSelf: "flex-end",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    width: "100%",
    backgroundColor: "#6588e4",
    color: "#ffffff",
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

export default function CreateTaskPage(props) {
  const { window } = props;
  const [mobileOpen] = React.useState(false);

  const {
    tasks,
    title,
    setTitle,
    descrip,
    setdescrip,
    setTasks,
  } = useAppState();

  const classes = useStyles();
  const theme = useTheme();

  let history = useHistory();

  function redirectAddTask() {
    history.push("/");
  }

  /* ************************** */
  /* Function to add a new Task */
  /* ************************** */
  const addTaskHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: title,
        description: descrip,
      },
    ]);
    setTitle("");
    setdescrip("");
    // redirect to home
    redirectAddTask();
  };

  // Material-UI specific code.
  const container = window !== undefined
    ? () => window().document.body
    : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        borderBottom={1}
        borderRadius={16}
      >
        <Toolbar className={classes.promitoolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={redirectAddTask}
            className={classes.menuButton}
          >
            <HomeIcon />
          </IconButton>
          <div className={classes.title} noWrap>
            <div style={{ margin: "20px" }} />
            <Typography className={classes.title} variant="h5" noWrap>
              Create new task
            </Typography>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <IconButton aria-label="search" color="inherit">
            <div style={{ padding: "15px" }}></div>
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={redirectAddTask}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <BurgerMenu />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <BurgerMenu />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.form}>
          <TextField
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Divider />
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={9}
            value={descrip}
            onChange={(e) => setdescrip(e.target.value)}
          />
          <Button
            onClick={addTaskHandler}
            variant="contained"
            className={classes.button}
            disableElevation
          >
            Create Task
          </Button>
        </div>
      </main>
    </div>
  );
}
