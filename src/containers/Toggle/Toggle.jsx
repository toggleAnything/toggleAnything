/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'components/MaterialTable';
import Dropdown from 'components/InputFields/Dropdown';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import './toggle.scss';

class Toggle extends React.PureComponent {
  render() {
    const fabStyle = {
      right: 50,
      bottom: 50,
      position: 'fixed',
    };
    return (
      <div className="toggle">
        <Paper className="filterFields">
          <TextField
            variant="outlined"
          />
          <Dropdown />
        </Paper>
        <MaterialTable />
        <Fab aria-label="add" color="inherit" style={fabStyle}>
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
