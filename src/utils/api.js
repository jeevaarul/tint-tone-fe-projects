import debounce from 'lodash.debounce';
import apiClient from '../api/axiosConfig';

/**
 * Main API client instance
 */
export { apiClient };

/**
 * Create debounced API call function
 * @param {Function} apiFunction - API function to debounce
 * @param {number} delay - Debounce delay in milliseconds
 * @returns {Function}
 */
export const createDebouncedApi = (apiFunction, delay = 300) => {
  return debounce(apiFunction, delay);
};

/**
 * Build query string from object
 * @param {Object} params - Query parameters
 * @returns {string}
 */
export const buildQueryString = (params) => {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      searchParams.append(key, value);
    }
  });
  
  return searchParams.toString();
};

/**
 * Handle API error responses
 * @param {Error} error - API error
 * @returns {string}
 */
export const handleApiError = (error) => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  
  if (error.response?.status === 401) {
    return 'Authentication required. Please login again.';
  }
  
  if (error.response?.status === 403) {
    return 'Access denied. You do not have permission to perform this action.';
  }
  
  if (error.response?.status === 404) {
    return 'Resource not found.';
  }
  
  if (error.response?.status >= 500) {
    return 'Server error. Please try again later.';
  }
  
  return error.message || 'An unexpected error occurred.';
};

/**
 * Retry API call with exponential backoff
 * @param {Function} apiCall - API function to retry
 * @param {number} maxRetries - Maximum number of retries
 * @param {number} baseDelay - Base delay in milliseconds
 * @returns {Promise}
 */
export const retryApiCall = async (apiCall, maxRetries = 3, baseDelay = 1000) => {
  let lastError;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await apiCall();
    } catch (error) {
      lastError = error;
      
      if (attempt === maxRetries) {
        throw error;
      }
      
      // Don't retry on client errors (4xx)
      if (error.response?.status >= 400 && error.response?.status < 500) {
        throw error;
      }
      
      // Exponential backoff
      const delay = baseDelay * Math.pow(2, attempt);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError;
};

/**
 * Authentication API calls
 */
export const authAPI = {
  login: (credentials) => apiClient.post('/api/v1/auth/login', credentials),
  logout: () => apiClient.post('/api/v1/auth/logout'),
  forgotPassword: (email) => apiClient.post('/api/v1/auth/forgot-password', { email }),
  resetPassword: (token, new_password) => apiClient.post('/api/v1/auth/reset-password', { token, new_password }),
  refreshToken: () => apiClient.post('/api/v1/auth/refresh'),
};