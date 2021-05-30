import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './state';
import App from './containers/App';
import ErrorBoundary from './ErrorBoundary';
import './app.scss';

const defaultState = {};
const store = configureStore(defaultState);

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('app'),
);
