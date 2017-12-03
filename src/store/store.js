import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({collapsed: true, diff: true});

export default createStore(
  () => {},
  applyMiddleware(thunk, logger)
);