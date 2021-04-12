import { combineReducers } from "redux";
import userReducer from "./user";
import ownerReducer from "./owner";
import contactReducer from "./contact";
import terrainReducer from "./terrain";
const rootReducer = combineReducers({
  contactReducer,
  userReducer,
  ownerReducer,
  terrainReducer,
});

export default rootReducer;
