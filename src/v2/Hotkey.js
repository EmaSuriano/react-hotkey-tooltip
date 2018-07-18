import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';
import { Consumer } from './HotkeyContext';
import { path, is } from 'ramda';
import { isFunction } from './utils';
import ReactDOM from 'react-dom';

export default class Hotkey extends React.Component {
  constructor(props) {
    super(props);

    this.child = React.createRef();
    Mousetrap.bind(this.props.combination, this.onPressHotkey);
  }

  onPressHotkey = evt => {
    const { onPress } = this.props;
    if (isFunction(onPress)) return onPress(evt);

    const innerFunction = this.child.current && this.child.current[onPress];
    if (isFunction(innerFunction)) {
      return this.child.current[onPress](evt);
    }

    console.log('no bueno');
  };

  render() {
    const { children, combination, onPress } = this.props;
    const myChildren = React.cloneElement(children, {
      ref: this.child,
    });

    return (
      <Consumer>
        {({ showTooltip }) => {
          console.log(showTooltip, 'here');
          return (
            <Tooltip
              title={combination.toUpperCase()}
              open={showTooltip}
              trigger="manual"
              multiple
            >
              {myChildren}
            </Tooltip>
          );
        }}
      </Consumer>
    );
  }
}

// const Hotkey = ({ children, combination, onPress }) => {
//   const myChildren = React.cloneElement(children, {
//     ref: ref => (this._element = ref),
//   });

//   console.log(myChildren);

//   return (
//     <Consumer>
//       {({ showTooltip }) => {
//         console.log(children);
//         return (
//           <Tooltip
//             title={combination.toUpperCase()}
//             open={showTooltip}
//             trigger="manual"
//             multiple
//           >
//             {children}
//           </Tooltip>
//         );
//       }}
//     </Consumer>
//   );
// };

Hotkey.propTypes = {
  combination: PropTypes.string,
  onPress: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.element.isRequired,
};

// export default Hotkey;
