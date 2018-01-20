import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// reducer
import reducer from './reducer';
import {getDataPost} from './reducer/post/actions';

// controllers
import content from '../controllers/content';

// Components
import App from './components/App';
const root = document.getElementById('root');
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

store.dispatch(getDataPost())


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
)
