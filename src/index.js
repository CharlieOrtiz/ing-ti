import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/main.css';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

