import { all, fork } from "redux-saga/effects";

import usersSaga from "./users/sagas";
console.log("master 1");
export default function* rootSaga() {
  yield all([fork(usersSaga)]);
}
