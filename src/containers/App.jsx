import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from '../components/App';

const AppContainer = () => (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route
          component={App}
          path="/"
        />
      </Switch>
    </Router>
  </React.StrictMode>
);

export default AppContainer;
