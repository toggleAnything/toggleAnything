import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
import sidebar from '../../constants/sidebar';

class Sidebar extends React.PureComponent {
  render() {
    return (
      <Paper elevation={0} style={{ height: '100vh', backgroundColor: '#eee' }}>
        <List style={{ paddingTop: '4rem' }}>
          {sidebar.map(({ text, icon, link }) => (
            <Link key={link} style={{ textDecoration: 'none', color: 'black' }} to={link}>
              <ListItem button>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Paper>
    );
  }
}

export default Sidebar;
