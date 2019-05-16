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
  const user = {...state.user};

  switch (action.type) {
    case Actions.LOGIN:
      user.loggedIn = true;
      user.token = action.token;
      break;
    case Actions.LOGOUT:
      user.loggedIn = false;
      user.token = null;
      break;
  }

  return user;
};

const listReducer = (state = INITIAL_STATE, action) => {
  const lists = {...state.lists};
  
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