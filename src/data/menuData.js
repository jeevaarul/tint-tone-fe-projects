import { USER_ROLES } from '../config/constants';

// Header navigation menu items
export const headerMenuItems = [
  {
    id: 'quotation',
    label: 'Quotation',
    path: '/quotations',
    requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER],
    active: true
  },
  {
    id: 'users',
    label: 'Users',
    path: '/users',
    requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER]
  },
  {
    id: 'products-services',
    label: 'Products/Services',
    path: '/products-services',
    requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER]
  },
  {
    id: 'clients',
    label: 'Clients',
    path: '/clients',
    requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER]
  },
  {
    id: 'admin',
    label: 'Admin',
    path: '/admin',
    requiredRoles: [USER_ROLES.ADMIN]
  },
  {
    id: 'quotation-requests',
    label: 'Quotation Requests',
    path: '/quotation-requests',
    requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER]
  }
];

// Sidebar menu items for each header tab
export const sidebarMenusByTab = {
  quotation: [
    {
      id: 'quotation-management',
      title: 'Quotation Management',
      items: [
        {
          id: 'all-quotations',
          label: 'All Quotations',
          path: '/quotations',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER]
        },
        {
          id: 'create-quotation',
          label: 'Create Quotation',
          path: '/quotations/new',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER]
        },
        {
          id: 'draft-quotations',
          label: 'Draft Quotations',
          path: '/quotations/drafts',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER]
        },
        {
          id: 'approved-quotations',
          label: 'Approved Quotations',
          path: '/quotations/approved',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER]
        }
      ]
    }
  ],
  users: [
    {
      id: 'user-management',
      title: 'User Management',
      items: [
        {
          id: 'all-users',
          label: 'All Users',
          path: '/users',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER]
        },
        {
          id: 'create-user',
          label: 'Create User',
          path: '/users/new',
          requiredRoles: [USER_ROLES.ADMIN]
        },
        {
          id: 'user-roles',
          label: 'User Roles',
          path: '/users/roles',
          requiredRoles: [USER_ROLES.ADMIN]
        },
        {
          id: 'user-permissions',
          label: 'User Permissions',
          path: '/users/permissions',
          requiredRoles: [USER_ROLES.ADMIN]
        }
      ]
    }
  ],
  'products-services': [
    {
      id: 'product-management',
      title: 'Product Management',
      items: [
        {
          id: 'all-products',
          label: 'All Products',
          path: '/products-services',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER]
        },
        {
          id: 'add-product',
          label: 'Add Product',
          path: '/products-services/new',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER]
        },
        {
          id: 'product-categories',
          label: 'Product Categories',
          path: '/products-services/categories',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER]
        },
        {
          id: 'pricing-management',
          label: 'Pricing Management',
          path: '/products-services/pricing',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER]
        }
      ]
    }
  ],
  clients: [
    {
      id: 'client-management',
      title: 'Client Management',
      items: [
        {
          id: 'all-clients',
          label: 'All Clients',
          path: '/clients',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER]
        },
        {
          id: 'add-client',
          label: 'Add Client',
          path: '/clients/new',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER]
        },
        {
          id: 'client-history',
          label: 'Client History',
          path: '/clients/history',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER]
        },
        {
          id: 'client-reports',
          label: 'Client Reports',
          path: '/clients/reports',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER]
        }
      ]
    }
  ],
  admin: [
    {
      id: 'system-administration',
      title: 'System Administration',
      items: [
        {
          id: 'system-settings',
          label: 'System Settings',
          path: '/admin/settings',
          requiredRoles: [USER_ROLES.ADMIN]
        },
        {
          id: 'backup-restore',
          label: 'Backup & Restore',
          path: '/admin/backup',
          requiredRoles: [USER_ROLES.ADMIN]
        },
        {
          id: 'audit-logs',
          label: 'Audit Logs',
          path: '/admin/logs',
          requiredRoles: [USER_ROLES.ADMIN]
        },
        {
          id: 'system-monitoring',
          label: 'System Monitoring',
          path: '/admin/monitoring',
          requiredRoles: [USER_ROLES.ADMIN]
        }
      ]
    }
  ],
  'quotation-requests': [
    {
      id: 'request-management',
      title: 'Request Management',
      items: [
        {
          id: 'pending-requests',
          label: 'Pending Requests',
          path: '/quotation-requests',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER]
        },
        {
          id: 'approved-requests',
          label: 'Approved Requests',
          path: '/quotation-requests/approved',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER]
        },
        {
          id: 'rejected-requests',
          label: 'Rejected Requests',
          path: '/quotation-requests/rejected',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER, USER_ROLES.USER]
        },
        {
          id: 'request-analytics',
          label: 'Request Analytics',
          path: '/quotation-requests/analytics',
          requiredRoles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER]
        }
      ]
    }
  ]
};

// Get sidebar menu for current tab
export const getSidebarMenuForTab = (pathname) => {
  const activeHeaderItem = headerMenuItems.find(item => 
    pathname.startsWith(item.path)
  );
  
  if (activeHeaderItem) {
    return sidebarMenusByTab[activeHeaderItem.id] || [];
  }
  
  return sidebarMenusByTab.quotation || [];
};