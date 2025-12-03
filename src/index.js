import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import './utils/globalDownloadManager';
import './styles/agGridCustom.css';

const theme = createTheme();
const emotionCache = createEmotionCache();

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);