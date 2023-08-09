import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter: BrowserRouter is a router implementation that uses 
  // the HTML5 history API(pushState, replaceState, and the popstate event) 
  // to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
