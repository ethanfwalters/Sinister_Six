import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import { sagas } from './saga.js';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

// sagaMiddleware.run(sagas);

export default store;
