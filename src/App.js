import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SnackbarProvider } from 'notistack';
import Dashboard from './pages/Dashboard';
import { useTokenExpiry } from './hooks/useTokenExpiry';
import TokenExpiryDialog from './components/TokenExpiryDialog';
import NotificationManager from './components/NotificationManager';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f4511e',
    },
    secondary: {
      main: '#004068'
    },
    error: {
      main: '#f44336'
    }
  },
});

function App() {
  const { tokenExpired, handleTokenExpiryLogin } = useTokenExpiry();
  
  useEffect(() => {
    const handleShellNavigation = (event) => {
      // Handle shell navigation events
    };

    window.addEventListener('shell-navigation', handleShellNavigation);

    return () => {
      window.removeEventListener('shell-navigation', handleShellNavigation);
    };
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SnackbarProvider maxSnack={3} anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}>
            <NotificationManager />
            <div>
              <Routes>
                <Route path="/" element={<Navigate to="/projects/list-projects" replace />} />
                <Route path="/projects/list-projects" element={<Dashboard />} />
              </Routes>
              
              {/* Global Token Expiry Dialog */}
              <TokenExpiryDialog
                open={tokenExpired}
                onGoToLogin={handleTokenExpiryLogin}
              />
            </div>
          </SnackbarProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;