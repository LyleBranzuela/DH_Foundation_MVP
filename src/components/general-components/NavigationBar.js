import "./NavigationBar.css";
import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { signin, signout } from "../../actions";

// Material UI Styles
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const NavigationBar = () => {
  // Auth0 Details
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  console.log(user);
  console.log(isAuthenticated);
  console.log(isLoading);
  console.log(user);
  return (
    <div className={useStyles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={useStyles.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{ flex: 1 }}
            variant="h6"
            className={useStyles.title}
          >
            News
          </Typography>
          {isAuthenticated ? (
            <div>
              <Button
                color="inherit"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Button>
              <Link style={{ textDecoration: "none" }} to="/profile">
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  color="inherit"
                >
                  <AccountCircle justify="space-between" />
                </IconButton>
              </Link>
            </div>
          ) : (
            <Button color="inherit" onClick={() => loginWithRedirect()}>
              Log In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    user_information: state.userReducer.user_information,
  };
};

const mapDispatchToProps = () => {
  return {
    signin,
    signout,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps())(NavigationBar)
);
