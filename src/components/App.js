import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NavigationBar from "./general-components/NavigationBar";
import Footer from "./general-components/Footer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";
import UserProfilePage from "./pages/UserProfilePage";
import Error404Page from "./general-components/Error404Page";
import ProtectedRoute from "../auth/protected-route";

const App = () => {
  // Returns the location object that represents the current URL
  const location = useLocation();
  let isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  let user_information = useSelector(
    (state) => state.userReducer.user_information
  );

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <NavigationBar />
      <Route>
        <Switch location={location} key={location.pathname}>
          {/* General Pages */}
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />

          {/* Protected Routes (Needs Auth0 Authentication Before Accessing) */}
          <ProtectedRoute path="/profile" component={UserProfilePage} />

          <Route path="" component={Error404Page} />
        </Switch>
      </Route>
      <Footer />
    </div>
  );
};

export default App;
