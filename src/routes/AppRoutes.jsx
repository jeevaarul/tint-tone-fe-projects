import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProtectedRoute from '../auth/ProtectedRoute';
import MainLayout from '../layouts/MainLayout';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { USER_ROLES } from '../config/constants';

// Lazy load components for code splitting
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Login = React.lazy(() => import('../pages/Login'));
const ForgotPassword = React.lazy(() => import('../pages/ForgotPassword'));
const ResetPassword = React.lazy(() => import('../pages/ResetPassword'));
const QuotationList = React.lazy(() => import('../pages/quotations/QuotationList'));
const QuotationForm = React.lazy(() => import('../pages/quotations/QuotationForm'));
const UserList = React.lazy(() => import('../pages/users/UserList'));
const UserForm = React.lazy(() => import('../pages/users/UserForm'));
const ProductsServices = React.lazy(() => import('../pages/ProductsServices'));
const Clients = React.lazy(() => import('../pages/Clients'));
const Admin = React.lazy(() => import('../pages/Admin'));
const QuotationRequests = React.lazy(() => import('../pages/QuotationRequests'));
const MenuItem1 = React.lazy(() => import('../pages/organization/MenuItem1'));
const Settings = React.lazy(() => import('../pages/Settings'));
const Unauthorized = React.lazy(() => import('../pages/Unauthorized'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Suspense fallback={<LoadingSpinner fullScreen />}>
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
          } 
        />
        <Route 
          path="/forgot-password" 
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <ForgotPassword />
          } 
        />
        <Route 
          path="/reset-password" 
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <ResetPassword />
          } 
        />
        
        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Routes>
                  <Route index element={<Navigate to="/quotations" replace />} />
                  
                  {/* Dashboard */}
                  <Route
                    path="dashboard"
                    element={
                      <ProtectedRoute requiredModule="dashboard">
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  
                  {/* Quotations */}
                  <Route
                    path="quotations"
                    element={
                      <QuotationList />
                    }
                  />
                  <Route
                    path="quotations/new"
                    element={
                      <QuotationForm />
                    }
                  />
                  <Route
                    path="quotations/:id/edit"
                    element={
                      <QuotationForm />
                    }
                  />
                  
                  {/* Products/Services */}
                  <Route
                    path="products-services"
                    element={<ProductsServices />}
                  />
                  
                  {/* Clients */}
                  <Route
                    path="clients"
                    element={<Clients />}
                  />
                  
                  {/* Admin */}
                  <Route
                    path="admin"
                    element={<Admin />}
                  />
                  
                  {/* Quotation Requests */}
                  <Route
                    path="quotation-requests"
                    element={<QuotationRequests />}
                  />
                  
                  {/* Companies */}
                  <Route
                    path="companies"
                    element={
                      <ProtectedRoute requiredModule="companies">
                        <MenuItem1 />
                      </ProtectedRoute>
                    }
                  />
                  
                  {/* Branches */}
                  <Route
                    path="branches"
                    element={
                      <ProtectedRoute requiredModule="branches">
                        <MenuItem1 />
                      </ProtectedRoute>
                    }
                  />
                  
                  {/* Teams */}
                  <Route
                    path="teams"
                    element={
                      <ProtectedRoute requiredModule="teams">
                        <MenuItem1 />
                      </ProtectedRoute>
                    }
                  />
                  
                  {/* Roles */}
                  <Route
                    path="roles"
                    element={
                      <ProtectedRoute requiredModule="roles">
                        <MenuItem1 />
                      </ProtectedRoute>
                    }
                  />
                  
                  {/* Users */}
                  <Route
                    path="users"
                    element={
                      <ProtectedRoute requiredModule="users">
                        <UserList />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="users/new"
                    element={
                      <ProtectedRoute requiredModule="users" requiredAction="can_create">
                        <UserForm />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="users/:id/edit"
                    element={
                      <ProtectedRoute requiredModule="users" requiredAction="can_edit">
                        <UserForm />
                      </ProtectedRoute>
                    }
                  />
                  
                  {/* Settings */}
                  <Route
                    path="settings"
                    element={<Settings />}
                  />
                  
                  {/* Error Pages */}
                  <Route path="unauthorized" element={<Unauthorized />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </MainLayout>
            </ProtectedRoute>
          }
        />
        
        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;