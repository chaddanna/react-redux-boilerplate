import React, { Component } from 'react';

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

export default ContentBlock;
