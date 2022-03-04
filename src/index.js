import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SupportAdmin from './components/ChatSupport/SupportAdmin/index';

const path = window.location.pathname

ReactDOM.render(
  <React.StrictMode>
    { path.indexOf('/support') === -1 ? <App /> : <SupportAdmin /> }
  </React.StrictMode>,
  document.getElementById('root')
);