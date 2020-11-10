import { combineReducers } from "redux";
import userReducer from "./isLogged";

const allReducers = combineReducers({ userReducer: userReducer });

export default allReducers;
