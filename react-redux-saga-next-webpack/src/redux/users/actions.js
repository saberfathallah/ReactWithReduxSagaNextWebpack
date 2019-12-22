import {
  USERS_FETCH_REQUESTED,
  SET_USERS,
} from "./types";
  
export const getAllUsersAction = () => {
  return {
    type: USERS_FETCH_REQUESTED,
  };
};
  
export const setUsers = users => ({
  type: SET_USERS,
  payload: users,
});  