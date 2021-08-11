/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'components/MaterialTable';
import TextField from '@material-ui/core/TextField';
import './toggle.scss';

class Toggle extends React.PureComponent {
  render() {
    return (
      <div className="toggle">
        <TextField
          variant="outlined"
        />
        <MaterialTable />
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
