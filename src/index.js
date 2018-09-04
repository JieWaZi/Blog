import './pages/CommonLayout/index'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import reducer from './reducers/reducers';
import CommonLayout from './pages/CommonLayout/index';
import {Route,HashRouter} from 'react-router-dom'

const logger = createLogger()
let store = createStore(
    reducer,
    applyMiddleware(logger, thunk)
)

render(
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={CommonLayout} />
        </HashRouter>
    </Provider>
    ,
    document.getElementById("app")
);
