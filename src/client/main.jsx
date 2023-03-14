import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Login from './pages/Login';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </React.StrictMode>
);
