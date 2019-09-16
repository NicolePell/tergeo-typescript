import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './index.css';
import rootReducer from './reducers';
import App from './App';

const store = createStore(combineReducers(rootReducer));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
