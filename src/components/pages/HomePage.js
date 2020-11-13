import React from "react";

class HomePage extends React.Component {
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
    return <div>TESTSETSETESTSTE</div>;
  }
}

export default HomePage;
