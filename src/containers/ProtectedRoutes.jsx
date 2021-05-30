import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from 'components/App';

class ProtectedRoutes extends React.Component {
  renderApp = () => <App />

  render() {
    return (
      <App>
        <Switch>
          <Route path="/" render={this.renderApp} />
        </Switch>
      </App>
    );
  }
}

export default ProtectedRoutes;
