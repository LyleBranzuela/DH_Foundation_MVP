import "./HomepageBanner.css";
import React from "react";
import { Container } from "react-bootstrap";

class HomepageBanner extends React.Component {
  constructor() {
    super();

    // Prevents Memory Leaks
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return <Container></Container>;
  }
}

export default HomepageBanner;
