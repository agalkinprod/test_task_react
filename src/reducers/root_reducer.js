import { combineReducers } from "redux";
import listReducer from "./list_reducer.js";

const appReducer = combineReducers({ listReducer });

export default (state = {}, action) => appReducer(state, action);