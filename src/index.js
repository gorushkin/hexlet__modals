import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('container'),
);

serviceWorker.unregister();
