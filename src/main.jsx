import React from 'react';

import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import Toast from './components/Toast';
import './index.css';
import { themes } from './themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={themes}>
    <App />
    <Toast />
  </ThemeProvider>
);
