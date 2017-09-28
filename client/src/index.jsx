import React from 'react';
import DOMReact from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger as logger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import FridgeApp from './reducers';
import App from './component/app.jsx';

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(FridgeApp, middleware);

DOMReact.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);