import "./NavigationBar.css";
import React from "react";
import { connect } from "react-redux";
import { signout } from "../../actions";
import { withRouter } from "react-router-dom";

class NavigationBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    user_information: state.userReducer.user_information,
  };
};

const mapDispatchToProps = () => {
  return {
    signout,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps())(NavigationBar)
);
