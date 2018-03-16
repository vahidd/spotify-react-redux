import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'Reducers';

const logger = createLogger({collapsed: true, diff: true});

export default createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);
