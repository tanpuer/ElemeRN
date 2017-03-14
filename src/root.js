/**
 * Created by eengoo on 17/3/12.
 */

import React from 'react';
import {Provider} from 'react-redux';
import App from './containers/app';
import configureStore from './store/configure-store';
import rootSaga from './sagas/index';

const store = configureStore();

//run root saga
store.runSaga(rootSaga);

const Root = ()=> (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default Root;

