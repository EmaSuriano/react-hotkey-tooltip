import React, { Component } from 'react';
import styled from 'styled-components';
import HotkeyWrapper from '../../../src';

const HighlightableP = styled.p`
  &:focus {
    background-color: lightblue;
  }
`;

export default class HighlightableText extends Component {
  render() {
    return (
      <HotkeyWrapper hotkey="p" onHotkeyPressed={() => this.p.focus()}>
        <HighlightableP innerRef={x => (this.p = x)} tabIndex="0">
          Fugiat consequat est tempor do. Dolor officia velit et nulla sint id id dolor
          reprehenderit officia. Lorem Lorem excepteur ex fugiat Lorem amet fugiat eu qui officia
          occaecat.
        </HighlightableP>
      </HotkeyWrapper>
    );
  }
}
