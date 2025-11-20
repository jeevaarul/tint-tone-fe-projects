import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from '@mui/material';

const TokenExpiryDialog = ({ open, onGoToLogin }) => {
  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Session Expired</DialogTitle>
      <DialogContent>
        <Typography>
          Your session has expired. Please log in again to continue.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onGoToLogin} variant="contained" color="primary">
          Go to Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TokenExpiryDialog;