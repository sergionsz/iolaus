import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Root from './js/Root/Root';
import rootReducer from './reducers';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
