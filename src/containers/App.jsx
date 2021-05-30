import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ProtectedRoutes from './ProtectedRoutes';

const AppContainer = () => (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route
          component={ProtectedRoutes}
          path="/"
        />
      </Switch>
    </Router>
  </React.StrictMode>
);

export default hot(module)(AppContainer);
