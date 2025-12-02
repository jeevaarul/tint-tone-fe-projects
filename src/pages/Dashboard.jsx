import React from 'react';
import {
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Person,
  Email,
  AdminPanelSettings,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  const getRoleColor = (role) => {
    switch (role?.toLowerCase()) {
      case 'admin':
        return '#d19a1e';
      case 'manager':
        return '#2196f3';
      case 'user':
        return '#4caf50';
      default:
        return '#757575';
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Welcome Card */}
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <DashboardIcon sx={{ color: '#d19a1e', mr: 2, fontSize: 32 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Welcome back, {user?.username || 'User'}!
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Welcome to the Tint Tone and Shade Portal. Manage your quotations, projects, and clients all in one place.
            </Typography>
          </Paper>
        </Grid>

        {/* User Info Card */}
        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    backgroundColor: '#d19a1e',
                    fontSize: '24px',
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {user?.username?.charAt(0).toUpperCase() || 'U'}
                </Avatar>
                
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {user?.username || 'Unknown User'}
                </Typography>
                
                <Chip
                  icon={<AdminPanelSettings />}
                  label={user?.role?.toUpperCase() || 'USER'}
                  sx={{
                    backgroundColor: getRoleColor(user?.role),
                    color: 'white',
                    fontWeight: 600,
                    mb: 2,
                  }}
                />
                
                <Box display="flex" alignItems="center" mb={1}>
                  <Email sx={{ color: '#666', mr: 1, fontSize: 18 }} />
                  <Typography variant="body2" color="text.secondary">
                    {user?.email || 'No email'}
                  </Typography>
                </Box>
                
                <Box display="flex" alignItems="center">
                  <Person sx={{ color: '#666', mr: 1, fontSize: 18 }} />
                  <Typography variant="body2" color="text.secondary">
                    ID: {user?.id || 'N/A'}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Stats */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Overview
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center" p={2}>
                  <Typography variant="h4" sx={{ color: '#d19a1e', fontWeight: 600 }}>
                    0
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Quotations
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center" p={2}>
                  <Typography variant="h4" sx={{ color: '#2196f3', fontWeight: 600 }}>
                    0
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Active Projects
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center" p={2}>
                  <Typography variant="h4" sx={{ color: '#4caf50', fontWeight: 600 }}>
                    0
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Clients
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center" p={2}>
                  <Typography variant="h4" sx={{ color: '#ff9800', fontWeight: 600 }}>
                    0
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Pending Reviews
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;