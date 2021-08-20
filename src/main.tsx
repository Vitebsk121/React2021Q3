import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App/App';

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(application, document.getElementById('root'));
