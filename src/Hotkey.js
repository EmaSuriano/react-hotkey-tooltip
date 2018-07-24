import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';
import MouseTrap from 'mousetrap';
import { Consumer } from './HotkeyContext';
import { isFunction } from './utils';

class HotkeyInner extends React.Component {
  static propTypes = {
    combination: PropTypes.string.isRequired,
    onPress: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    children: PropTypes.element.isRequired,

    // from Context
    disabled: PropTypes.bool.isRequired,
    showTooltip: PropTypes.bool.isRequired,
    tooltipOptions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.child = React.createRef();
    MouseTrap.bind(props.combination, this.onPressHotkey);
  }

  componentWillReceiveProps(nextProps) {
    const { combination } = this.props;
    if (nextProps.combination !== combination) {
      MouseTrap.unbind(combination);
      MouseTrap.bind(nextProps.combination, this.onPressHotkey);
    }
  }

  componentWillUnmount() {
    const { combination } = this.props;

    MouseTrap.unbind(combination);
  }

  onPressHotkey = evt => {
    const { onPress, disabled } = this.props;
    if (disabled) return false;

    if (isFunction(onPress)) return onPress(evt);

    if (!isFunction(this.child.current[onPress])) {
      throw new Error(
        `ERROR: The method of ${onPress} is not present in the DOMNode of the child, please check render.`,
      );
    }
    return this.child.current[onPress](evt);
  };

  render() {
    const {
      children,
      combination,
      disabled,
      showTooltip,
      tooltipOptions,
    } = this.props;
    const open = showTooltip && !disabled;
    return (
      <Tooltip
        {...tooltipOptions}
        title={combination.toUpperCase()}
        open={open}
        trigger="manual"
        multiple
      >
        {React.cloneElement(children, {
          ref: this.child,
        })}
      </Tooltip>
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
