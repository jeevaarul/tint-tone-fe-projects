import { useSelector } from 'react-redux';
import { hasModulePermission, getModulePermissions } from '../utils/permissions';

/**
 * Custom hook for checking user permissions
 * @returns {Object} Permission checking functions
 */
export const usePermissions = () => {
  const { permissions } = useSelector((state) => state.auth);

  /**
   * Check if user has specific permission for a module
   * @param {string} module - Module name
   * @param {string} action - Action type
   * @returns {boolean}
   */
  const hasPermission = (module, action) => {
    return hasModulePermission(permissions, module, action);
  };

  /**
   * Get all permissions for a module
   * @param {string} module - Module name
   * @returns {Object}
   */
  const getPermissions = (module) => {
    return getModulePermissions(permissions, module);
  };

  /**
   * Check if user can view a module
   * @param {string} module - Module name
   * @returns {boolean}
   */
  const canView = (module) => {
    return hasPermission(module, 'can_view');
  };

  /**
   * Check if user can create in a module
   * @param {string} module - Module name
   * @returns {boolean}
   */
  const canCreate = (module) => {
    return hasPermission(module, 'can_create');
  };

  /**
   * Check if user can edit in a module
   * @param {string} module - Module name
   * @returns {boolean}
   */
  const canEdit = (module) => {
    return hasPermission(module, 'can_edit');
  };

  /**
   * Check if user can delete in a module
   * @param {string} module - Module name
   * @returns {boolean}
   */
  const canDelete = (module) => {
    return hasPermission(module, 'can_delete');
  };

  /**
   * Check if user can export from a module
   * @param {string} module - Module name
   * @returns {boolean}
   */
  const canExport = (module) => {
    return hasPermission(module, 'can_export');
  };

  /**
   * Check if user can import to a module
   * @param {string} module - Module name
   * @returns {boolean}
   */
  const canImport = (module) => {
    return hasPermission(module, 'can_import');
  };

  return {
    hasPermission,
    getPermissions,
    canView,
    canCreate,
    canEdit,
    canDelete,
    canExport,
    canImport,
  };
};