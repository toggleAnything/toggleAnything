import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from 'components/App';
import Toggle from './Toggle';

class ProtectedRoutes extends React.Component {
  renderToggle = () => <Toggle />

  render() {
    return (
      <App>
        <Switch>
          <Route path="/toggle" render={this.renderToggle} />
        </Switch>
      </App>
    );
  }
}

export default ProtectedRoutes;
