// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import SupportAdmin from './components/ChatSupport/SupportAdmin/index';

// const path = window.location.pathname

// ReactDOM.render(
//   <React.StrictMode>
//     { path.indexOf('/support') === -1 ? <App /> : <SupportAdmin /> }
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </CookiesProvider>,
  document.getElementById("root")
);
