import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api/axiosConfig';

// Async thunks
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/api/v1/auth/login', { email, password });
      const { user, access_token, menu, permissions } = response.data;
      
      return { 
        user: {
          id: user.UserId,
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name
        }, 
        token: access_token,
        menu,
        permissions
      };
    } catch (error) {
      return rejectWithValue(error.response?.data?.detail || 'Login failed');
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/api/v1/auth/forgot-password', { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to send reset email');
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, new_password }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/api/v1/auth/reset-password', { token, new_password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to reset password');
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/api/v1/auth/refresh');
      const { access_token } = response.data;
      return { token: access_token };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Token refresh failed');
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await apiClient.post('/api/v1/auth/logout');
      return {};
    } catch (error) {
      // Even if logout fails, clear local state
      return {};
    }
  }
);

// Load state from sessionStorage
const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('authState');
    if (serializedState === null) {
      return {
        user: null,
        token: null,
        menu: [],
        permissions: {},
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      user: null,
      token: null,
      menu: [],
      permissions: {},
      isAuthenticated: false,
      isLoading: false,
      error: null,
    };
  }
};

const initialState = loadState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setCredentials: (state, action) => {
      const { user, token, menu, permissions } = action.payload;
      state.user = user;
      state.token = token;
      state.menu = menu || [];
      state.permissions = permissions || {};
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.menu = action.payload.menu;
        state.permissions = action.payload.permissions;
        state.isAuthenticated = true;
        state.error = null;
        // Save to sessionStorage
        sessionStorage.setItem('authState', JSON.stringify({
          user: action.payload.user,
          token: action.payload.token,
          menu: action.payload.menu,
          permissions: action.payload.permissions,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        }));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      // Forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Refresh Token
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.menu = [];
        state.permissions = {};
        state.isAuthenticated = false;
        state.error = null;
        // Clear sessionStorage
        sessionStorage.removeItem('authState');
      });
  },
});

export const { clearError, setCredentials } = authSlice.actions;
export default authSlice.reducer;