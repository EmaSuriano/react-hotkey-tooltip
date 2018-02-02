import React from 'react';

export function mouseTrap(Base) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.__mousetrapBindings = [];
      this.Mousetrap = require('mousetrap');
    }

    bindShortcut(key, callback, event = 'keypress') {
      this.Mousetrap.bind(key, callback, event);
      this.__mousetrapBindings.push(key);
    }

    unbindShortcut(key) {
      var index = this.__mousetrapBindings.indexOf(key);

      if (index > -1) {
        this.__mousetrapBindings.splice(index, 1);
      }

      this.Mousetrap.unbind(key);
    }

    unbindAllShortcuts() {
      if (this.__mousetrapBindings.length < 1) {
        return;
      }

      this.__mousetrapBindings.forEach(binding => {
        this.Mousetrap.unbind(binding);
      });
      this.__mousetrapBindings = [];
    }

    componentWillUnmount() {
      this.unbindAllShortcuts();
    }

    render() {
      return (
        <Base
          {...this.props}
          bindShortcut={this.bindShortcut.bind(this)}
          unbindShortcut={this.unbindShortcut.bind(this)}
        />
      );
    }
  };
}

export default mouseTrap;
