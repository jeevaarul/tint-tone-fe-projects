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

const DRAWER_WIDTH = '18vw'; // 18% of viewport width

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
  const activeTab = filteredHeaderMenu.findIndex(item => {
    // Check if current path matches item path
    if (item.path && location.pathname.startsWith(item.path)) return true;
    // Check if current path matches any child path
    if (item.children && item.children.length > 0) {
      return item.children.some(child => child.path && location.pathname.startsWith(child.path));
    }
    return false;
  });

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
      // If item has path, navigate to it
      if (selectedItem.path) {
        navigate(selectedItem.path, { replace: false });
      } 
      // If no path but has children, navigate to first child or use item name as path
      else if (selectedItem.children && selectedItem.children.length > 0) {
        const firstChildPath = selectedItem.children[0].path;
        navigate(firstChildPath || `/${selectedItem.name}`, { replace: false });
      }
      // Fallback: use item name as path
      else {
        navigate(`/${selectedItem.name}`, { replace: false });
      }
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
        <Toolbar sx={{ minHeight: '8vh !important', maxHeight: '64px' }}>
          {/* Logo */}
          <Box sx={{ mr: 3 }}>
            <img
              src={ttLogo}
              alt="TT Logo"
              style={{
                height: 'clamp(32px, 5vh, 48px)',
                width: 'auto',
                minWidth: 'clamp(60px, 8vw, 100px)',
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
                fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                fontWeight: 500,
                color: '#666',
                minHeight: '8vh',
                maxHeight: '64px',
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
                  width: 'clamp(28px, 3vw, 36px)',
                  height: 'clamp(28px, 3vw, 36px)',
                  backgroundColor: '#d19a1e',
                  fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                  fontWeight: 'bold'
                }}
              >
                {user?.firstName?.charAt(0)?.toUpperCase() || 'U'}
              </Avatar>
              <Typography variant="body2" sx={{ ml: 1, fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}>
                Hi, {user?.firstName || 'User'}
              </Typography>
              <KeyboardArrowDown sx={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }} />
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
            backgroundColor: '#FFF9EC',
            borderRight: '1px solid #00000000',
            mt: 'clamp(56px, 8vh, 64px)'
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
          mt: 'clamp(56px, 8vh, 64px)',
          // overflow: 'auto',
          height: 'calc(100vh - clamp(56px, 8vh, 64px))'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;