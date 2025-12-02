import React from 'react';
import { usePermissions } from '../../hooks/usePermissions';

/**
 * Wrapper component to conditionally render content based on permissions
 * @param {Object} props - Component props
 * @param {string} props.module - Module name to check permissions for
 * @param {string} props.action - Action type to check (can_view, can_create, etc.)
 * @param {React.ReactNode} props.children - Content to render if permission is granted
 * @param {React.ReactNode} props.fallback - Content to render if permission is denied
 * @returns {React.ReactNode}
 */
const PermissionWrapper = ({ 
  module, 
  action, 
  children, 
  fallback = null 
}) => {
  const { hasPermission } = usePermissions();

  if (!module || !action) {
    return children;
  }

  const hasAccess = hasPermission(module, action);

  return hasAccess ? children : fallback;
};

export default PermissionWrapper;