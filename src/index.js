import React from 'react';
import ReactDOM from 'react-dom';

import Store from './store';
import App from './app';
import './scss/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root')
);
registerServiceWorker();
