import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import mouseTrap from './react-mousetrap';
import ReactDOM from 'react-dom';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import MouseTrap from 'mousetrap';

const questionsHandlers = {
  show: [],
  hide: [],
};

const tooltipList = {};

const callHandlers = showTooltip => () =>
  tooltipList.forEach(func => func(showTooltip));

class ShorcutWrapper extends Component {
  static propTypes = {
    shortcut: PropTypes.string.isRequired,
    onShortcutPressed: PropTypes.func.isRequired,
    showTooltipShortcut: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    showTooltipShortcut: 'x',
  };

  state = {
    showTooltip: false,
  };

  componentDidMount() {
    // questionsHandlers.push('asdasdasd');
    // console.log(questionsHandlers);
    // window.addEventListener('keydown', this.handleHelpKey, false);
    // questionsHandlers.show.push(this.showTooltip);
    // questionsHandlers.hide.push(this.hideTooltip);
    tooltipList.push(this.setShowTooltip);

    MouseTrap.bind(
      this.props.showTooltipShortcut,
      callHandlers(true),
      'keydown',
    );
    MouseTrap.bind(
      this.props.showTooltipShortcut,
      callHandlers(false),
      'keyup',
    );
    // this.props.bindShortcut('x', callHandlers('show'), 'keydown');
    // this.props.bindShortcut('x', callHandlers('hide'), 'keyup');

    // this.props.bindShortcut(this.props.shortcut, this.focusComponent);
    MouseTrap.bind(this.props.shortcut, this.focusComponent);
  }

  componentWillUnmount() {
    const index = tooltipList.indexOf(key);

    if (index > -1) {
      tooltipList.splice(index, 1);
    }
  }

  // handleHelpKey = event => {
  //   console.log(event);
  //   if (event.keyCode == 27) {
  //     //ESC key
  //     this.toggleHelp();
  //   }
  // };

  setShowTooltip = showTooltip =>
    this.state.showTooltip !== showTooltip && this.setState({ showTooltip });

  // showTooltip = () =>
  //   !this.state.showTooltip && this.setState({ showTooltip: true });

  // hideTooltip = () => {
  //   console.log('asdasd');
  //   this.setState({ showTooltip: false });
  // };

  focusComponent = event => {
    const isFocus =
      document.activeElement === ReactDOM.findDOMNode(this.component);
    if (!isFocus) event.preventDefault();
    // debugger;
    if (typeof this.props.onShortcutPressed === 'function')
      return this.props.onShortcutPressed();

    // const functionToCall = this.component[this.props.onShortcutPressed];
    // debugger;
    // if (functionToCall) functionToCall();
    this.component.focus();
  };

  toggleHelp = () => {
    console.log('setting state');
    this.setState({ showHelp: !this.state.showHelp });
  };

  render() {
    const childrenRef = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        ref: node => (this.component = node),
      }),
    );

    return (
      <Tooltip
        title={this.props.shortcut.toUpperCase()}
        position="bottom"
        trigger="manual"
        open={this.state.showTooltip}
        arrow
        multiple
      >
        {childrenRef}
      </Tooltip>
    );
  }
}

export default mouseTrap(ShorcutWrapper);
