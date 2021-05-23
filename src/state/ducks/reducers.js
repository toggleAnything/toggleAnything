import { combineReducers } from 'redux';
import { reducers as user } from './user';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
