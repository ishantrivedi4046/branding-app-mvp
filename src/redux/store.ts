import ENV_CONFIG from 'constant/env.config';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import RootReducer from './reducers';
import rootSaga from './sagas';

/* Root Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

let middlewares = applyMiddleware(sagaMiddleware);

if (ENV_CONFIG.APP_ENV === 'development') {
  middlewares = applyMiddleware(sagaMiddleware, logger);
}

/* Root Store with all the combined reducers */
const store = createStore(RootReducer, composeWithDevTools(middlewares));

/* Run the sagas */
sagaMiddleware.run(rootSaga);

export default store;
