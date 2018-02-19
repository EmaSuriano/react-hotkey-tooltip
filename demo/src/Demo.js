import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from './Container';
import Title from './Title';
import Footer from './Footer';
import GithubLink from './GithubLink';
import './Demo.css';

export default class Demo extends Component {
  state = {
    showMenu: true,
  };

  toggleMenu = () => this.setState({ showMenu: !this.state.showMenu });

  render() {
    return (
      <React.Fragment>
        <Title />
        <Container />
        <Footer />
        <GithubLink />
      </React.Fragment>
    );
  }
}
