import React from 'react';
import { Box, Typography } from '@mui/material';

const Organization = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Organization Management
      </Typography>
      <Typography variant="body1">
        Manage your organization structure, companies, branches, teams, roles, and users.
      </Typography>
    </Box>
  );
};

export default Organization;
