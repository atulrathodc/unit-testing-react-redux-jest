import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  todos,
  visibilityFilter,
   form: reduxFormReducer
})