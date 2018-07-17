import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';
import { Consumer } from './HotkeyContext';

const Hotkey = ({ children, combination, onPress }) => {
  return (
    <Consumer>
      {({ showTooltip }) => {
        return (
          <Tooltip
            title={combination.toUpperCase()}
            open={showTooltip}
            trigger="manual"
            multiple
          >
            {children}
          </Tooltip>
        );
      }}
    </Consumer>
  );
};

Hotkey.propTypes = {
  combination: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.node,
};

export default Hotkey;
