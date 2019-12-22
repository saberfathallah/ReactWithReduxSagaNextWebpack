import fetch from 'isomorphic-unfetch';
const USERS_URL = "https://api.github.com/users";

const fetchUsers = async () => {
  const res = await fetch(USERS_URL);
  const users = await res.json();
  return users;
};

export default fetchUsers;
