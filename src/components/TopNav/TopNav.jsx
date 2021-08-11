import React from 'react';
import './TopNav.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

class TopNav extends React.PureComponent {
  render() {
    return (
      <AppBar
        className="top-navbar"
        elevation={0}
        position="fixed"
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography noWrap style={{ color: 'black' }} variant="h6">
            Toggle Anything
          </Typography>
          <IconButton
            aria-controls="menu-appbar"
            aria-haspopup="true"
            aria-label="account of current user"
            color="inherit"
            edge="end"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>

      </AppBar>
    );
  }
}

export default TopNav;
