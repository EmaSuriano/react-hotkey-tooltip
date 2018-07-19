import React from 'react';
import { Consumer } from './HotkeyContext';
import PropTypes from 'prop-types';

const withHotkeysConsumer = WrappedComponent => {
  class withHotkeys extends React.Component {
    static propTypes = {
      a: PropTypes.bool,
    };

    render() {
      return (
        <Consumer>
          {context => <WrappedComponent {...context} {...this.props} />}
        </Consumer>
      );
    }
  }

  withHotkeys.displayName = `withHotkeys(${WrappedComponent.displayName ||
    WrappedComponent.name})`;

  return withHotkeys;
};

export default withHotkeysConsumer;
