// actions/users/sign-out.js
import API from '../../lib/api';

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

const api = new API();
const users = api.service('users');

export default (user) => {
  return (dispatch) =>{
    api.signOut();
    dispatch(loggedOutUser());
  }
}

const loggedOutUser = () => {
  return {
    type: USER_LOGGED_OUT,
  };
}