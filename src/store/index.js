import { createStore,  compose } from 'redux';
import reducer from './reducer';

// 开启redux-dev-tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers();

//const sagaMiddleware = createSagaMiddleware(); import {applyMiddleware} from 'redux';
// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);
// sagaMiddleware.run(todoSagas);
export default store;

