import authentication from './authentication';
import profile from './profile';
import list from './list';

import { combineReducers } from 'redux';

export default combineReducers({
  authentication, profile, list,
});
