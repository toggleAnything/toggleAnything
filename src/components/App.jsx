/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TopNav from './TopNav';
import Sidebar from './SideBar';

import './App.scss';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectTab: 'features',
    };
  }

  handleSelect = (currentTab) => {
    this.setState({ selectTab: currentTab });
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <Grid
          alignItems="center"
          className="base-layout"
          container
          direction="row"
          elevation={0}
          justify="center"
          spacing={0}
        >
          <Grid item xs={12}>
            <TopNav />
          </Grid>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            {children}
          </Grid>
        </Grid>
      </>
    );
  }
}
App.propTypes = {
  children: PropTypes.node.isRequired,
};

const TestExports = { App };

export { TestExports };

export default App;
