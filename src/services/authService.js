import apiClient from '../api/axiosConfig';

const ENDPOINTS = {
  LOGIN: '/api/v1/auth/login',
  LOGOUT: '/api/v1/auth/logout',
  REFRESH: '/api/v1/auth/refresh',
  PROFILE: '/api/v1/auth/profile',
  CHANGE_PASSWORD: '/api/v1/auth/change-password',
  FORGOT_PASSWORD: '/api/v1/auth/forgot-password',
  RESET_PASSWORD: '/api/v1/auth/reset-password',
};

export const authService = {
  /**
   * Login user
   */
  login: async (credentials) => {
    const response = await apiClient.post(ENDPOINTS.LOGIN, credentials);
    return response.data;
  },

  /**
   * Logout user
   */
  logout: async () => {
    const response = await apiClient.post(ENDPOINTS.LOGOUT);
    return response.data;
  },

  /**
   * Refresh access token
   */
  refreshToken: async () => {
    const response = await apiClient.post(ENDPOINTS.REFRESH);
    return response.data;
  },

  /**
   * Get user profile
   */
  getProfile: async () => {
    const response = await apiClient.get(ENDPOINTS.PROFILE);
    return response.data;
  },

  /**
   * Update user profile
   */
  updateProfile: async (profileData) => {
    const response = await apiClient.put(ENDPOINTS.PROFILE, profileData);
    return response.data;
  },

  /**
   * Change password
   */
  changePassword: async (passwordData) => {
    const response = await apiClient.post(ENDPOINTS.CHANGE_PASSWORD, passwordData);
    return response.data;
  },

  /**
   * Forgot password
   */
  forgotPassword: async (email) => {
    const response = await apiClient.post(ENDPOINTS.FORGOT_PASSWORD, { email });
    return response.data;
  },

  /**
   * Reset password
   */
  resetPassword: async (token, new_password) => {
    const response = await apiClient.post(ENDPOINTS.RESET_PASSWORD, { token, new_password });
    return response.data;
  },
};