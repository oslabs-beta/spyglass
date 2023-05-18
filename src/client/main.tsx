// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './pages/App';
// import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material';

// // create custom theme from mood icons
// const theme = createTheme({
//   palette: {
//     White: {
//       main: '#fff'
//     },
//     Black: {
//       main: '#1a1a1a'
//     }
//   }
// });

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ThemeProvider theme={theme}>
//         <App />
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

// create custom theme from mood icons
const theme = createTheme({
  palette: {
    White: {
      main: '#fff'
    },
    Black: {
      main: '#1a1a1a'
    }
  }
});

function Root() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
