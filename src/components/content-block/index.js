import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class ContentBlock extends Component {
  render() {
    return (
      <div className="content-block">
        <p>{this.props.content}</p>
      </div>
    );
  }
}

ContentBlock.propTypes = {
  content: PropTypes.string
};

export default ContentBlock;
