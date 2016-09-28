import authentication from './authentication';
import profile from './profile';

import { combineReducers } from 'redux';

export default combineReducers({
  authentication, profile
});
