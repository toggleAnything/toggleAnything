import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectors, actions } from '../state/ducks/user';

class App extends React.PureComponent {
  onButtonClick = () => {
    const { onButtonClick } = this.props;
    onButtonClick();
  }

  render() {
    const { isSelected } = this.props;
    return (
      <>
        <h1>Hello world</h1>
        <Button onClick={this.onButtonClick} type="primary">Primary Button</Button>
        <h2>
          IsButtonClicked:
          {isSelected}
        </h2>
      </>
    );
  }
}

App.defaultProps = {
  isSelected: false,
  onButtonClick: () => {},
};

App.propTypes = {
  isSelected: PropTypes.bool,
  onButtonClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isSelected: selectors.getSelected(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: () => dispatch(actions.onButtonClick()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
