// User Types
export const UserType = {
  id: '',
  email: '',
  name: '',
  role: '',
  isActive: false,
  createdAt: '',
  updatedAt: '',
};

// Auth Types
export const AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// API Response Types
export const ApiResponse = {
  data: null,
  message: '',
  success: false,
  errors: [],
};

// Pagination Types
export const PaginationMeta = {
  page: 1,
  limit: 10,
  total: 0,
  totalPages: 0,
};

// Quotation Types
export const QuotationType = {
  id: '',
  quotationNumber: '',
  clientName: '',
  clientEmail: '',
  items: [],
  subtotal: 0,
  tax: 0,
  total: 0,
  status: 'draft', // draft, sent, approved, rejected
  createdBy: '',
  createdAt: '',
  updatedAt: '',
};