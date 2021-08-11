import React from 'react';
import './TopNav.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class TopNav extends React.PureComponent {
  render() {
    return (
      <AppBar
        className="top-navbar"
        elevation={0}
        position="fixed"
      >
        <Toolbar>
          <Typography noWrap style={{ color: 'black' }} variant="h6">
            Toggle Anything
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopNav;
