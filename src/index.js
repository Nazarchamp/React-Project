import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//Render the react app into the element root, this app will contain all other components
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
