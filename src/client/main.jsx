import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Login from './pages/Login';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

// create custom theme from mood icons
const theme = createTheme({
  palette: {
    DarkGray: {
      main: '#4d4d4d'
    },
    LightGray: {
      main: '#e0e0e0'
    },
    Gray: {
      main: '##c6cdd2'
    },
    DarkBlue: {
      main: '#132c44'
    },
    LightBlue: {
      main: '#0074d9'
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
