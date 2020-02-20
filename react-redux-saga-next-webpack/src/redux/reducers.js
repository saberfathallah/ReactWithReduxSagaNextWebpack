import { combineReducers } from "redux";

import usersReducer from "./users/reducer";
console.log("branche learn");
console.log("branche learn2");
const rootReducer = combineReducers({
  usersReducer,
});

export default rootReducer;
