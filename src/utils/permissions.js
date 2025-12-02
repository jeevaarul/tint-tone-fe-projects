import { USER_ROLES, ROUTE_PERMISSIONS } from '../config/constants';

/**
 * Check if user has required permission
 * @param {string} userRole - Current user's role
 * @param {string[]} requiredRoles - Array of required roles
 * @returns {boolean}
 */
export const hasPermission = (userRole, requiredRoles) => {
  if (!userRole || !requiredRoles.length) return false;
  return requiredRoles.includes(userRole);
};

/**
 * Check if user can access a specific route
 * @param {string} userRole - Current user's role
 * @param {string} route - Route path
 * @returns {boolean}
 */
export const canAccessRoute = (userRole, route) => {
  const allowedRoles = ROUTE_PERMISSIONS[route];
  if (!allowedRoles) return true; // Public route
  return hasPermission(userRole, allowedRoles);
};

/**
 * Get user role hierarchy level
 * @param {string} role - User role
 * @returns {number}
 */
export const getRoleLevel = (role) => {
  const levels = {
    [USER_ROLES.USER]: 1,
    [USER_ROLES.MANAGER]: 2,
    [USER_ROLES.ADMIN]: 3,
  };
  return levels[role] || 0;
};

/**
 * Check if user has higher or equal role level
 * @param {string} userRole - Current user's role
 * @param {string} requiredRole - Required minimum role
 * @returns {boolean}
 */
export const hasMinimumRole = (userRole, requiredRole) => {
  return getRoleLevel(userRole) >= getRoleLevel(requiredRole);
};

/**
 * Filter menu items based on user permissions
 * @param {Array} menuItems - Array of menu items
 * @param {string} userRole - Current user's role
 * @returns {Array}
 */
export const filterMenuByRole = (menuItems, userRole) => {
  return menuItems.filter(item => {
    if (!item.requiredRoles) return true;
    return hasPermission(userRole, item.requiredRoles);
  });
};

/**
 * Check if user has specific permission for a module
 * @param {Object} permissions - User permissions object from API
 * @param {string} module - Module name (e.g., 'companies', 'users')
 * @param {string} action - Action type (e.g., 'can_view', 'can_create')
 * @returns {boolean}
 */
export const hasModulePermission = (permissions, module, action) => {
  if (!permissions || !module || !action) return false;
  return permissions[module]?.[action] === true;
};

/**
 * Get all permissions for a specific module
 * @param {Object} permissions - User permissions object from API
 * @param {string} module - Module name
 * @returns {Object}
 */
export const getModulePermissions = (permissions, module) => {
  return permissions?.[module] || {};
};