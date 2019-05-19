import Actions from '../actions/Actions';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  user: null,
  messages: {
    loginStatus: 'Logged Out'
  },
  lists: {
    movieSuggestions: {
      movies: []
    }
  }
};

const messagesReducer = (state = INITIAL_STATE.messages, action) => {
  const messages = {...state};

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

const userReducer = (state = INITIAL_STATE.user, action) => {
  const user = {...state};

  switch (action.type) {
    case Actions.LOGIN:
      user.loggedIn = true;
      user.token = action.token;
      user.name = action.name;
      break;
    case Actions.LOGOUT:
      user.loggedIn = false;
      user.token = null;
      break;
  }

  return user;
};

const listReducer = (state = INITIAL_STATE.lists, action) => {
  const lists = {...state};

  switch (action.type) {
    case Actions.MOVIE_SUGGESTIONS_LOAD:
      lists.movieSuggestions.movies = action.movies;
      break;
  }

  return lists;
};

export default combineReducers({
  messages: messagesReducer,
  user: userReducer,
  lists: listReducer
});