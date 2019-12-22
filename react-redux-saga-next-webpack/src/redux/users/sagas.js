import { call, put, takeLatest, all } from 'redux-saga/effects'
import fetchUsers from 'apis/users';
import { USERS_FETCH_FAILED, USERS_FETCH_REQUESTED } from "./types";
import { setUsers } from "./actions";

function* fetchAllUsers() {
  try {
    const users = yield call(fetchUsers);
    yield put(setUsers(users));
  } catch (e) {
    yield put({type: USERS_FETCH_FAILED, message: e.message});
  }
}

export default function* usersSaga() {
  yield all([takeLatest(USERS_FETCH_REQUESTED, fetchAllUsers)]);
}

