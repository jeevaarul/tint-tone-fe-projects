import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Link,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword, clearError } from '../store/slices/authSlice';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(forgotPassword({ email })).unwrap();
      setMessage('Please check your email to reset your password.');
    } catch (err) {
      // Error is handled by Redux
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      dispatch(clearError());
    }
    if (message) {
      setMessage('');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Grid container maxWidth="lg" sx={{ height: '600px' }}>
        {/* Left Side - Forgot Password Form */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              height: '100%',
              p: 6,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: { xs: 2, md: '8px 0 0 8px' },
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Link
                onClick={() => navigate('/login')}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#d19a1e',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  mb: 3,
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                <ArrowBack sx={{ mr: 1, fontSize: 20 }} />
                Back to Login
              </Link>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3, fontSize: '14px' }}
              >
                Tint Tone and Shade Portal
              </Typography>
              
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: '#333',
                  fontSize: '32px',
                }}
              >
                Forgot Password?
              </Typography>
              
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.6 }}
              >
                Enter your email address and we'll send you instructions to reset your password.
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            {message && (
              <Alert severity="success" sx={{ mb: 3 }}>
                {message}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, fontWeight: 500, color: '#333' }}
                >
                  Email Address <span style={{ color: '#d19a1e' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#f8f9fa',
                      '& fieldset': {
                        borderColor: '#e0e0e0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#d19a1e',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#d19a1e',
                      },
                    },
                  }}
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isLoading || !email}
                sx={{
                  backgroundColor: '#d19a1e',
                  color: 'white',
                  py: 1.5,
                  fontSize: '16px',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#b8851a',
                  },
                  '&:disabled': {
                    backgroundColor: '#e0e0e0',
                    color: '#9e9e9e',
                  },
                }}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Send Reset Instructions'
                )}
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Right Side - Branding */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              height: '100%',
              backgroundColor: '#2c2c2c',
              color: 'white',
              p: 6,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: { xs: 2, md: '0 8px 8px 0' },
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: '3px solid #d19a1e',
                borderRadius: { xs: 2, md: '0 8px 8px 0' },
                pointerEvents: 'none',
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: '72px',
                fontWeight: 700,
                color: '#d19a1e',
                mb: 2,
                letterSpacing: '2px',
              }}
            >
              TTS
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: '#d19a1e',
              }}
            >
              Tint Tone and Shade
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              Your home, your custom interior design.
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                lineHeight: 1.6,
                maxWidth: '300px',
              }}
            >
              Designed for quotation, project, and client management in one place.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForgotPassword;