import appReducer from './reducers/AppReducer';
import { createStore } from 'redux';

const store = createStore(appReducer);

export default store
