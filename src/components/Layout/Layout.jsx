/* eslint-disable no-unused-vars */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TopNav from './TopNav';
import Sidebar from './SideBar';

import './Layout.scss';

class AppLayout extends React.PureComponent {
  render() {
    return (
      <>
        <Grid
          alignItems="center"
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
            <p>Content</p>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default AppLayout;
