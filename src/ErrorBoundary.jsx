import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong. The following error occurred:
          {JSON.stringify(error)}
        </h1>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default ErrorBoundary;
