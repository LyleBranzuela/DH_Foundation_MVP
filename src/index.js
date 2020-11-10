import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import throttle from "lodash/throttle";
import App from "./components/App";
import { loadState, saveState } from "./redux-handler/sessionStorage";

// Load all the states if they exist
const persistedState = loadState();
const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// Save all the States to Session Storage
store.subscribe(
  throttle(() => {
    saveState({
      userReducer: store.getState().userReducer,
    });
  }),
  1000
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
