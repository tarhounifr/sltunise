import { combineReducers } from "redux";
import userReducer from "./user";
import ownerReducer from "./owner";

const rootReducer = combineReducers({ userReducer, ownerReducer });

export default rootReducer;
