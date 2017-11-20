import React, { Component } from 'react';

import logo from 'src/images/logo.svg';
import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
