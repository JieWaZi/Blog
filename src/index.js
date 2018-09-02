import './pages/CommonLayout/index'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import reducer from './reducers/reducers';
import ArticleContent from './component/Content/index'
import CommonLayout from './pages/CommonLayout/index'
import ArticlePage from './pages/ArticlePage/index'
import {Route,Link,BrowserRouter} from 'react-router-dom';

const logger = createLogger()
let store = createStore(
    reducer,
    applyMiddleware(logger, thunk)
)

const getRouter = ()=> {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <Route exact path="/" component={ArticleContent} />
                    <Route path="/article" component={ArticlePage} />
                </div>
            </div>
        </BrowserRouter>
    )
}

render(
    <Provider store={store}>
        <BrowserRouter>
           <CommonLayout/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("app")
);
