import { combineReducers } from "redux";

import usersReducer from "./users/reducer";
console.log("branche learn");
const rootReducer = combineReducers({
  usersReducer,
});

export default rootReducer;
