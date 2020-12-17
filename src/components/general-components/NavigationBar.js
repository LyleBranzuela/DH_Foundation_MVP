import "./NavigationBar.css";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { signin, signout } from "../../actions";

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
    <Navbar collapseOnSelect fixed="top" expand="lg" className="navBarStyle">
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact-us">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/founder-message">
            <Nav.Link>Founder's Message</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/news">
            <Nav.Link>Latest News</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/donate">
            <Nav.Link>Donate</Nav.Link>
          </LinkContainer>
        </Nav>
        {isAuthenticated ? (
          <div>
            <Nav.Link
              color="inherit"
              className="navBarEffect"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </Nav.Link>
            <LinkContainer to="/profile">
              <Nav.Link>
                <i class="bi bi-person-circle"></i>
              </Nav.Link>
            </LinkContainer>
          </div>
        ) : (
          <Nav.Link
            className="navBarEffect"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </Nav.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
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
