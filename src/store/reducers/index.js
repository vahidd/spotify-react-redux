import { combineReducers } from 'redux';

import { user } from 'Reducers/UserReducer';

const rootReducer = combineReducers({
  user
});

export default rootReducer;
