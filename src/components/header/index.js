import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <span className="title">{ this.props.title }</span>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
