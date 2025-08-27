import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
const express = require('express');
const cors = require('cors');
const AppDataSource = require('./data-source');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
