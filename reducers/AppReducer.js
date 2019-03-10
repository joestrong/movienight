import Actions from '../actions/Actions';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  user: null,
  messages: {
    loginStatus: 'Logged Out'
  }
};

const messagesReducer = (state = INITIAL_STATE, action) => {
  const messages = {...state.messages};

  switch (action.type) {
    case Actions.LOGIN:
      messages.loginStatus = 'Logged in';
      break;
    case Actions.LOGIN_PROGRESS:
      messages.loginStatus = 'Logging in..';
      break;
    case Actions.LOGIN_FAILURE:
      messages.loginStatus = 'Login failed';
      break;
    case Actions.LOGOUT:
      messages.loginStatus = 'Logged out';
      break;
  }

  return messages;
};

const userReducer = (state = INITIAL_STATE, action) => {
  return state.user;
};

export default combineReducers({
  messages: messagesReducer,
  user: userReducer,
});