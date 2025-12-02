import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// React Query will be added later
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { store } from './store';
import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './components/common/ErrorBoundary';
import NotificationManager from './components/NotificationManager';
import './App.css';

// React Query client will be added later
// const queryClient = new QueryClient({...});

// Create MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#d19a1e',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  // typography: {
  //   fontFamily: "'Inter', 'Inter Fallback', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  // },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <BrowserRouter>
              <AppRoutes />
              <NotificationManager />
            </BrowserRouter>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;