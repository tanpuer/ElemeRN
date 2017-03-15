/**
 * Created by eengoo on 17/3/14.
 */
import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
const middlewares = [];
const createLogger = require('redux-logger');

//configuring saga middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
middlewares.push(thunk)

if (__DEV__){
    const logger = createLogger();
    middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    //install saga run
    store.runSaga = sagaMiddleware.run;
    store.close = ()=> store.dispatch(END);

    return store;
}