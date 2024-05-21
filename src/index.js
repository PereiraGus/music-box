import Home from './pages/home/Home'
import Musicas from './pages/musicas/Musicas';

import React from 'react';
import ReactDOM from 'react-dom/client';

import "./utils/globals.css"
import "./utils/globals.js"

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);