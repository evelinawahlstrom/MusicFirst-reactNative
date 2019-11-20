import { USER_LOADED_FROM_STORAGE } from '../actions/users/load';
import { USER_SIGNUP_ERROR } from '../actions/users/signup';
import { USER_LOGGED_IN, USER_AUTH_ERROR } from '../actions/users/login';
import { USER_LOGGED_OUT } from '../actions/users/logout';
import { AsyncStorage } from 'react-native';

export default (state = null, { type, payload }) => {
  switch (type) {
    case USER_LOADED_FROM_STORAGE :
      return payload;

    case USER_LOGGED_IN :
      AsyncStorage.setItem('musicUser', JSON.stringify(payload));
      return { ...payload };

    case USER_LOGGED_OUT :
      AsyncStorage.removeItem('musicUser');
      return {};

    case USER_SIGNUP_ERROR :
    case USER_AUTH_ERROR :
      const { name, errors } = payload;
      return {
        error: { name, errors }
      };

    default :
      return state;
  }
}