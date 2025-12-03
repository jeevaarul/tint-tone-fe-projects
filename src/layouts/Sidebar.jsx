import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { filterMenuByRole } from '../utils/permissions';
import { getSidebarMenuForTab } from '../data/menuData';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, menu } = useSelector((state) => state.auth);

  // Use API menu if available, otherwise fallback to static menu
  const sidebarMenuItems = menu.length > 0 
    ? transformApiMenuToSidebar(menu, location.pathname)
    : getSidebarMenuForTab(location.pathname);

  // Transform API menu structure to sidebar format
  function transformApiMenuToSidebar(apiMenu, currentPath) {
    const currentSection = apiMenu.find(item => {
      if (item.path && currentPath.startsWith(item.path)) return true;
      if (item.children?.length > 0) {
        return item.children.some(child => child.path && currentPath.startsWith(child.path));
      }
      return false;
    });
    
    if (!currentSection || !currentSection.children?.length) {
      return [];
    }
    
    return [{
      id: currentSection.MenuId,
      title: currentSection.label,
      items: currentSection.children.map(child => ({
        id: child.MenuId,
        label: child.label,
        path: child.path,
        icon: child.icon
      }))
    }];
  }

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ p: '2vh 1.5vw' }}>
      {sidebarMenuItems.map((section) => {
        const filteredItems = filterMenuByRole(section.items, user?.role);
        
        if (filteredItems.length === 0) return null;
        
        return (
          <Box key={section.id} sx={{ mb: '2vh' }}>
            {/* Section Title */}
            <Typography
              variant="subtitle2"
              sx={{
                color: '#666',
                fontSize: 'clamp(0.65rem, 0.9vw, 0.75rem)',
                fontWeight: 500,
                mb: '1vh',
                textTransform: 'uppercase',
                letterSpacing: '0.03em'
              }}
            >
              {section.title}
            </Typography>
            
            {/* Menu Items */}
            <List sx={{ p: 0 }}>
              {filteredItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                
                return (
                  <ListItem key={item.id} disablePadding sx={{ mb: '0.5vh' }}>
                    <ListItemButton
                      onClick={() => handleNavigation(item.path)}
                      sx={{
                        borderRadius: '8px',
                        py: '1.2vh',
                        px: '1vw',
                        backgroundColor: isActive ? '#e8d5a3' : 'transparent',
                        borderLeft: isActive ? '4px solid #d19a1e' : '4px solid transparent',
                        '&:hover': {
                          backgroundColor: isActive ? '#e8d5a3' : '#eeeeee',
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                            fontWeight: isActive ? 600 : 400,
                            color: isActive ? '#8b6914' : '#333',
                          }
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        );
      })}
    </Box>
  );
};

export default Sidebar;