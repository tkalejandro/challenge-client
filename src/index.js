import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import LayOut from './layout/Layout.js';


ReactDOM.render(
  <React.StrictMode>
  <LayOut>
      <App />
  </LayOut>
   
  </React.StrictMode>,
  document.getElementById('root')
);

