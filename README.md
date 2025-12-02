# Quotation Management System

A production-ready React application for managing quotations with role-based access control, built with modern technologies and best practices.

## 🚀 Tech Stack

- **Frontend**: React 18, Material-UI v5
- **State Management**: Redux Toolkit + React Query
- **Authentication**: JWT with refresh tokens
- **Build Tool**: Webpack 5
- **Code Quality**: ESLint, Prettier, Husky
- **Testing**: Jest, React Testing Library

## 📁 Project Structure

```
src/
├── api/                 # API configuration and interceptors
├── auth/               # Authentication components
├── components/         # Reusable UI components
│   ├── common/        # Common components (ErrorBoundary, etc.)
│   └── ui/            # UI components (Modal, Table, etc.)
├── config/            # App configuration and constants
├── hooks/             # Custom React hooks
├── layouts/           # Layout components
├── pages/             # Page components (lazy-loaded)
├── routes/            # Route configuration
├── services/          # API service layers
├── store/             # Redux store and slices
├── types/             # Type definitions
└── utils/             # Utility functions
```

## 🔧 Installation & Setup

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd tint-tone-fe-projects
   npm install
   ```

2. **Environment setup:**
   ```bash
   cp .env.example .env.development
   # Edit .env.development with your API endpoints
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start development server
npm start               # Alternative dev server

# Building
npm run build           # Production build
npm run build:dev       # Development build
npm run build:uat       # UAT build
npm run build:prod      # Production build

# Code Quality
npm run lint            # Run ESLint
npm run format          # Format with Prettier
npm test               # Run tests

# Git Hooks
npm run prepare         # Setup Husky hooks
```

## 🔐 Authentication & Security

### JWT Implementation
- **Access Token**: Stored in Redux state (memory)
- **Refresh Token**: HTTP-only cookie (secure)
- **Auto-refresh**: Automatic token renewal on 401 errors
- **Role-based Access**: Admin, Manager, User roles

### Security Features
- XSS protection with DOMPurify
- Input sanitization
- Sensitive data masking
- HTTPS-only cookies in production
- Error boundary for graceful error handling

## 🎯 Key Features

### Authentication Flow
```javascript
// Login process
dispatch(login({ email, password }))
  .unwrap()
  .then(() => navigate('/dashboard'))
  .catch(error => showError(error));
```

### Protected Routes
```javascript
<ProtectedRoute requiredRoles={[USER_ROLES.ADMIN]}>
  <AdminPanel />
</ProtectedRoute>
```

### API Integration
```javascript
// Using custom hooks
const { data, isLoading, error } = useApiQuery(
  ['quotations', filters],
  () => quotationService.getQuotations(filters)
);
```

### Role-based UI
```javascript
// Menu filtering
const filteredMenu = filterMenuByRole(menuItems, user.role);

// Component visibility
{hasPermission(user.role, [USER_ROLES.ADMIN]) && (
  <AdminOnlyComponent />
)}
```

## 📊 Performance Optimizations

- **Code Splitting**: Lazy-loaded routes and components
- **Memoization**: useMemo and useCallback for expensive operations
- **Debounced API**: Search and filter operations
- **Query Caching**: React Query with 5-minute stale time
- **Bundle Optimization**: Webpack tree shaking and minification

## 🧪 Testing Strategy

```bash
# Run tests with coverage
npm test -- --coverage

# Watch mode for development
npm test -- --watch
```

## 🚀 Deployment

### Environment Variables
```bash
# Required for all environments
REACT_APP_API_BASE_URL=https://api.example.com
REACT_APP_WEBSOCKET_URI=wss://api.example.com/ws

# Optional
REACT_APP_SENTRY_DSN=your-sentry-dsn
REACT_APP_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

### Build Commands
```bash
# Development
npm run build:dev

# UAT
npm run build:uat

# Production
npm run build:prod
```

## 🔄 API Integration

### Service Layer Example
```javascript
// services/quotationService.js
export const quotationService = {
  getQuotations: (params) => apiClient.get('/quotations', { params }),
  createQuotation: (data) => apiClient.post('/quotations', data),
  updateQuotation: (id, data) => apiClient.put(`/quotations/${id}`, data),
  deleteQuotation: (id) => apiClient.delete(`/quotations/${id}`),
};
```

### Error Handling
- Global error interceptor
- User-friendly error messages
- Automatic retry for network errors
- Role-based error responses

## 🎨 UI Components

### Reusable Components
- **DataTable**: Sortable, paginated table with actions
- **Modal**: Customizable dialog component
- **LoadingSpinner**: Loading states with optional overlay
- **ErrorBoundary**: Graceful error handling

### Usage Examples
```javascript
<DataTable
  data={quotations}
  columns={columns}
  onEdit={handleEdit}
  onDelete={handleDelete}
  selectable
/>

<Modal
  open={isOpen}
  title="Create Quotation"
  onClose={handleClose}
  actions={<Button>Save</Button>}
>
  <QuotationForm />
</Modal>
```

## 🔧 Development Guidelines

### Code Style
- Use functional components with hooks
- Implement proper error boundaries
- Follow naming conventions (camelCase, PascalCase)
- Add JSDoc comments for complex functions

### State Management
- Use Redux for global state (auth, UI)
- Use React Query for server state
- Keep local state minimal with useState

### Performance Best Practices
- Memoize expensive calculations
- Use React.lazy for code splitting
- Implement proper loading states
- Debounce user inputs

## 📝 Contributing

1. Create feature branch from `develop`
2. Follow coding standards (ESLint + Prettier)
3. Write tests for new features
4. Update documentation
5. Submit pull request

## 🐛 Troubleshooting

### Common Issues
- **Build fails**: Check Node.js version (16+ required)
- **API errors**: Verify environment variables
- **Auth issues**: Clear browser cookies and localStorage

### Debug Mode
```bash
# Enable debug logging
REACT_APP_DEBUG=true npm run dev
```

## 📄 License

This project is private and proprietary.

---

**Note**: This is a scaffold setup. Implement actual pages and API endpoints based on your requirements.