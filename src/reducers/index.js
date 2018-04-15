import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import  users1  from './user'

const rootReducer = combineReducers({
  state: (state = {}) => state,
  form : formReducer,
  users:users1
});

export default rootReducer;
