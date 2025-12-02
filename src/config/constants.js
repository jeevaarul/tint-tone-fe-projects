// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8001',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
};

// Authentication
export const AUTH_CONFIG = {
  TOKEN_KEY: 'access_token',
  REFRESH_TOKEN_KEY: 'refresh_token',
  TOKEN_EXPIRY_BUFFER: 5 * 60 * 1000, // 5 minutes
};

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
};

// Route Permissions
export const ROUTE_PERMISSIONS = {
  '/dashboard': [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER],
  '/quotations': [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER],
  '/users': [USER_ROLES.ADMIN, USER_ROLES.MANAGER],
  '/settings': [USER_ROLES.ADMIN],
};

// Pagination
export const PAGINATION_CONFIG = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
};

// Query Keys
export const QUERY_KEYS = {
  AUTH: 'auth',
  QUOTATIONS: 'quotations',
  USERS: 'users',
  DASHBOARD: 'dashboard',
};