import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';
import { Consumer } from './HotkeyContext';
import { path, is } from 'ramda';
import { isFunction, KEYBOARD_EVENT, ERROR_MESSAGES } from './utils';
import ReactDOM from 'react-dom';
import HotkeyRegister from './HotkeyRegister';
import withHotkeyConsumer from './withHotkeyConsumer';
import MouseTrap from 'mousetrap';
// console.log(Hotkey.propTypes);

class HotkeyInner extends React.Component {
  static propTypes = {
    combination: PropTypes.string.isRequired,
    onPress: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    children: PropTypes.element.isRequired,
    disabled: PropTypes.bool,
    showTooltip: PropTypes.bool,
    tooltipProps: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.child = React.createRef();
    MouseTrap.bind(this.props.combination, this.onPressHotkey);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.combination !== this.props.combination) {
      MouseTrap.unbind(this.props.combination);
      MouseTrap.bind(nextProps.combination, this.onPressHotkey);
    }
  }

  componentWillUnmount() {
    MouseTrap.unbind(this.props.combination);
  }

  onPressHotkey = evt => {
    const { onPress, disabled } = this.props;
    if (disabled) return;

    if (isFunction(onPress)) return onPress(evt);

    if (!isFunction(this.child.current[onPress])) {
      return console.error(ERROR_MESSAGES.METHOD_NOT_FOUND_IN_CHILD);
    }
    return this.child.current[onPress](evt);
  };

  render() {
    const { children, combination, disabled } = this.props;

    return (
      <Consumer>
        {({ showTooltip }) => {
          return (
            <Tooltip
              title={combination.toUpperCase()}
              open={showTooltip && !disabled}
              trigger="manual"
              multiple
            >
              {React.cloneElement(children, {
                ref: this.child,
              })}
            </Tooltip>
          );
        }}
      </Consumer>
    );
  }
}

const Hotkey = ({ disabled, ...props }) => (
  <Consumer>
    {({ disabled: disabledGroup, ...context }) => (
      <HotkeyInner
        disabled={disabled || disabledGroup}
        {...context}
        {...props}
      />
    )}
  </Consumer>
);

Hotkey.propTypes = {
  /** Key combination to trigger the onPress action. */
  combination: PropTypes.string.isRequired,
  /** Action to called when hotkey is pressed. */
  onPress: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  /** React child component, useful to position the tooltip. */
  children: PropTypes.element.isRequired,
  /** Disable tooltip and action. */
  disabled: PropTypes.bool,
};

Hotkey.defaultProps = {
  disabled: false,
};

export default Hotkey;
