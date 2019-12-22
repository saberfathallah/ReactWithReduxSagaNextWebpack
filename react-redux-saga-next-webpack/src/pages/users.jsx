import React from 'react';
import { connect } from "react-redux";

import { selectUsers } from "rredux/users/selector";
import { getAllUsersAction } from "rredux/users/actions";

const Users = ({ users, a }) => (
  <div>
    {users.map(user => <p key={user.id}>{user.login}</p>)}
  </div>
);

Users.getInitialProps = async ({ ctx }) => {
  ctx.store.dispatch(getAllUsersAction());

  return {
    a: "a",
  }
};

const mapStateToProps = state => ({
  users: selectUsers(state),
});

export default connect(
  mapStateToProps,
  null,
)(Users);
