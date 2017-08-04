import {combineReducers} from 'redux';

import user from 'reducers/userReducers';

const rootReducer = combineReducers({
  user
});

export default rootReducer;
