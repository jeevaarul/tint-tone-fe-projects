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
        height: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        overflow: 'hidden',
      }}
    >
      <Grid container sx={{ width: '90vw', maxWidth: '1200px', height: '85vh', minHeight: '500px', maxHeight: '700px' }}>
        {/* Left Side - Forgot Password Form */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              height: '100%',
              p: '3vh 4vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: { xs: 2, md: '8px 0 0 8px' },
              overflow: 'auto',
            }}
          >
            <Box sx={{ mb: '2vh' }}>
              <Link
                onClick={() => navigate('/login')}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#d19a1e',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  mb: '1.5vh',
                  fontSize: '0.875rem',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                <ArrowBack sx={{ mr: 1, fontSize: 20 }} />
                Back to Login
              </Link>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: '1.5vh', fontSize: '0.875rem' }}
              >
                Tint Tone and Shade Portal
              </Typography>
              
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: '1vh',
                  color: '#333',
                  fontSize: 'clamp(1.5rem, 2vw, 1.75rem)',
                }}
              >
                Forgot Password?
              </Typography>
              
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: '2vh', lineHeight: 1.6, fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}
              >
                Enter your email address and we'll send you instructions to reset your password.
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: '2vh' }}>
                {error}
              </Alert>
            )}

            {message && (
              <Alert severity="success" sx={{ mb: '2vh' }}>
                {message}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Box sx={{ mb: '2vh' }}>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, fontWeight: 500, color: '#333', fontSize: '0.875rem' }}
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
                  py: '1.5vh',
                  fontSize: 'clamp(0.875rem, 1vw, 1rem)',
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
              p: '3vh 4vw',
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
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: 700,
                color: '#d19a1e',
                mb: '1.5vh',
                letterSpacing: '0.1em',
              }}
            >
              TTS
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: '1.5vh',
                color: '#d19a1e',
                fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
              }}
            >
              Tint Tone and Shade
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: '2vh',
                opacity: 0.9,
                lineHeight: 1.6,
                fontSize: 'clamp(0.875rem, 1vw, 1rem)',
              }}
            >
              Your home, your custom interior design.
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                lineHeight: 1.6,
                maxWidth: '80%',
                fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)',
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