import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Tab,
  Tabs,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Logout,
  Settings,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../store/slices/authSlice';
import { toggleSidebar } from '../store/slices/uiSlice';
import { filterMenuByRole } from '../utils/permissions';
import { headerMenuItems } from '../data/menuData';
import Sidebar from './Sidebar';
import ttLogo from '../assets/tt_logo.png';

const DRAWER_WIDTH = 280;

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, menu } = useSelector((state) => state.auth);
  const { sidebarOpen } = useSelector((state) => state.ui);
  const [anchorEl, setAnchorEl] = useState(null);

  // Use menu from API or fallback to static menu
  const headerMenu = menu.length > 0 ? menu : headerMenuItems;
  const filteredHeaderMenu = filterMenuByRole(headerMenu, user?.role);
  const activeTab = filteredHeaderMenu.findIndex(item => location.pathname.startsWith(item.path));

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleProfileMenuClose();
  };

  const handleDrawerToggle = () => {
    dispatch(toggleSidebar());
  };

  const handleTabChange = (event, newValue) => {
    const selectedItem = filteredHeaderMenu[newValue];
    if (selectedItem) {
      // Navigate to the base path first, then let the sidebar handle sub-navigation
      navigate(selectedItem.path, { replace: false });
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#fff',
          color: '#000',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ minHeight: '64px !important' }}>
          {/* Logo */}
          <Box sx={{ mr: 3 }}>
            <img
              src={ttLogo}
              alt="TT Logo"
              style={{
                height: '40px',
                width: 'auto',
                minWidth: '80px',
                objectFit: 'contain'
              }}
            />
          </Box>

          {/* Navigation Tabs */}
          <Tabs
            value={activeTab >= 0 ? activeTab : false}
            onChange={handleTabChange}
            sx={{
              flexGrow: 1,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                color: '#666',
                minHeight: '64px',
                '&.Mui-selected': {
                  color: '#d19a1e',
                  backgroundColor: '#fff8e1',
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#d19a1e',
                height: '3px'
              }
            }}
          >
            {filteredHeaderMenu.map((item, index) => (
              <Tab key={item.MenuId || item.id || index} label={item.label} />
            ))}
          </Tabs>

          {/* User Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              onClick={handleProfileMenuOpen}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: '#000',
                textTransform: 'none'
              }}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: '#d19a1e',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                {user?.firstName?.charAt(0)?.toUpperCase() || 'U'}
              </Avatar>
              <Typography variant="body2" sx={{ ml: 1 }}>
                Hi, {user?.firstName || 'User'}
              </Typography>
              <KeyboardArrowDown sx={{ fontSize: '16px' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        sx={{ mt: 1 }}
      >
        <MenuItem>
          <AccountCircle sx={{ mr: 2 }} />
          Profile
        </MenuItem>
        <MenuItem>
          <Settings sx={{ mr: 2 }} />
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <Logout sx={{ mr: 2 }} />
          Logout
        </MenuItem>
      </Menu>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            backgroundColor: '#f5f5f5',
            borderRight: 'none',
            mt: '64px'
          },
        }}
      >
        <Sidebar />
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: '#fafafa',
          mt: '64px',
          overflow: 'auto'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;