import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectors, actions } from '../state/ducks/user';
import Layout from './Layout';

class App extends React.PureComponent {
  onButtonClick = () => {
    const { onButtonClick } = this.props;
    onButtonClick();
  }

  render() {
    return (
      <>
        <Layout />
      </>
    );
  }
}

App.defaultProps = {
  onButtonClick: () => {},
};

App.propTypes = {
  onButtonClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isSelected: selectors.getSelected(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: () => dispatch(actions.onButtonClick()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
