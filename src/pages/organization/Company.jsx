import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Company = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyCode: '',
    companyAddress: '',
    logo: null,
    logoPreview: null,
    status: 'active'
  });
  
  const [companies, setCompanies] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (event, newStatus) => {
    if (newStatus !== null) {
      setFormData(prev => ({ ...prev, status: newStatus }));
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setFormData(prev => ({
        ...prev,
        logo: file,
        logoPreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSave = () => {
    if (!formData.companyName) return;

    const newCompany = {
      id: editingId || Date.now(),
      companyName: formData.companyName,
      code: formData.companyCode,
      address: formData.companyAddress,
      status: formData.status,
      logo: formData.logoPreview
    };

    if (editingId) {
      setCompanies(prev => prev.map(c => c.id === editingId ? newCompany : c));
      setEditingId(null);
    } else {
      setCompanies(prev => [...prev, newCompany]);
    }

    setFormData({
      companyName: '',
      companyCode: '',
      companyAddress: '',
      logo: null,
      logoPreview: null,
      status: 'active'
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleEdit = (company) => {
    setFormData({
      companyName: company.companyName,
      companyCode: company.code,
      companyAddress: company.address,
      logo: null,
      logoPreview: company.logo,
      status: company.status
    });
    setEditingId(company.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const StatusRenderer = (props) => (
    <Box
      sx={{
        display: 'inline-block',
        px: 1.5,
        py: 0.3,
        borderRadius: '12px',
        backgroundColor: props.value === 'active' ? '#10B981' : '#E5E7EB',
        color: props.value === 'active' ? '#fff' : '#6B7280',
        fontSize: '12px',
        fontWeight: 500
      }}
    >
      {props.value === 'active' ? 'Active' : 'Inactive'}
    </Box>
  );

  const ActionsRenderer = (props) => (
    <Button
      onClick={() => handleEdit(props.data)}
      sx={{
        color: '#6B7280',
        textTransform: 'none',
        fontSize: '13px',
        minWidth: 'auto',
        p: 0,
        '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
      }}
    >
      Edit
    </Button>
  );

  const columnDefs = [
    { field: 'companyName', headerName: 'Company name', flex: 1, filter: true },
    { field: 'code', headerName: 'Code', flex: 1, filter: true },
    { field: 'address', headerName: 'Address', flex: 2, filter: true },
    { field: 'status', headerName: 'Status', flex: 1, cellRenderer: StatusRenderer, filter: true },
    { field: 'actions', headerName: 'Actions', flex: 0.5, cellRenderer: ActionsRenderer, sortable: false, filter: false }
  ];

  return (
    <Box sx={{ p: 3, backgroundColor: '#fff', minHeight: '100vh' }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '12px', mb: 0.5, display: 'block' }}>
          Organization Management / Company
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5, fontSize: '20px' }}>
          Company
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '12px' }}>
          Manage your company information and logo.
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#fff', borderRadius: '24px', p: 2.5, mb: 2.5, boxShadow: '0 2px 10px rgba(15, 23, 42, 0.06)',border:'1px solid #ebe9e9' }}>
        <Typography variant="subtitle1" sx={{ mb: 2.5, fontWeight: 600, fontSize: '15px' }}>
          Company details
        </Typography>

        <Box sx={{ display: 'flex', gap: 2.5, mb: 2.5 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ mb: 0.8, fontWeight: 500, fontSize: '13px' }}>
              Company name
            </Typography>
            <TextField
              fullWidth
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Enter Company Name..."
              size="small"
              sx={{ 
                backgroundColor: '#F9FAFB',
                '& .MuiInputBase-input': { fontSize: '13px', py: 1 }
              }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ mb: 0.8, fontWeight: 500, fontSize: '13px' }}>
              Status
            </Typography>
            <ToggleButtonGroup
              value={formData.status}
              exclusive
              onChange={handleStatusChange}
              sx={{ width: '100%', height: '38px' }}
            >
              <ToggleButton
                value="active"
                sx={{
                  flex: 1,
                  textTransform: 'none',
                  fontSize: '13px',
                  border: '1px solid #E5E7EB',
                  py: 0.8,
                  '&.Mui-selected': {
                    backgroundColor: '#10B981',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#059669' }
                  }
                }}
              >
                Active
              </ToggleButton>
              <ToggleButton
                value="inactive"
                sx={{
                  flex: 1,
                  textTransform: 'none',
                  fontSize: '13px',
                  border: '1px solid #E5E7EB',
                  py: 0.8,
                  '&.Mui-selected': {
                    backgroundColor: '#E5E7EB',
                    color: '#6B7280',
                    '&:hover': { backgroundColor: '#D1D5DB' }
                  }
                }}
              >
                Inactive
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>

        <Box sx={{ mb: 2.5 }}>
          <Typography variant="body2" sx={{ mb: 0.8, fontWeight: 500, fontSize: '13px' }}>
            Company code
          </Typography>
          <TextField
            fullWidth
            name="companyCode"
            value={formData.companyCode}
            onChange={handleInputChange}
            placeholder="Enter company code"
            size="small"
            sx={{ 
              backgroundColor: '#F9FAFB',
              '& .MuiInputBase-input': { fontSize: '13px', py: 1 }
            }}
          />
        </Box>

        <Box sx={{ mb: 2.5 }}>
          <Typography variant="body2" sx={{ mb: 0.8, fontWeight: 500, fontSize: '13px' }}>
            Company address
          </Typography>
          <TextField
            fullWidth
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleInputChange}
            placeholder="Enter registered company address"
            size="small"
            sx={{ 
              backgroundColor: '#F9FAFB',
              '& .MuiInputBase-input': { fontSize: '13px', py: 1 }
            }}
          />
        </Box>

        <Box sx={{ mb: 2.5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.8 }}>
            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '13px' }}>
              Upload logo
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '11px' }}>
              Optional
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Box
              sx={{
                width: 70,
                height: 70,
                backgroundColor: '#F3F4F6',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              {formData.logoPreview ? (
                <img src={formData.logoPreview} alt="Logo preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '11px' }}>Logo preview</Typography>
              )}
            </Box>
            <Box>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleLogoUpload}
                accept=".png,.jpg,.jpeg,.svg"
                style={{ display: 'none' }}
              />
              <Button
                variant="contained"
                onClick={() => fileInputRef.current?.click()}
                sx={{
                  backgroundColor: '#D97706',
                  color: '#fff',
                  textTransform: 'none',
                  fontSize: '13px',
                  px: 2.5,
                  py: 0.8,
                  '&:hover': { backgroundColor: '#B45309' }
                }}
              >
                Upload logo
              </Button>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.8, fontSize: '11px' }}>
                PNG, JPG, SVG. Max size 2 MB.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5 }}>
          <Button
            variant="outlined"
            sx={{
              textTransform: 'none',
              fontSize: '13px',
              color: '#6B7280',
              borderColor: '#E5E7EB',
              px: 2.5,
              py: 0.7,
              '&:hover': { borderColor: '#D1D5DB', backgroundColor: '#F9FAFB' }
            }}
            onClick={() => {
              setFormData({
                companyName: '',
                companyCode: '',
                companyAddress: '',
                logo: null,
                logoPreview: null,
                status: 'active'
              });
              setEditingId(null);
              if (fileInputRef.current) fileInputRef.current.value = '';
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              backgroundColor: '#D97706',
              color: '#fff',
              textTransform: 'none',
              fontSize: '13px',
              px: 2.5,
              py: 0.7,
              '&:hover': { backgroundColor: '#B45309' }
            }}
          >
            Save
          </Button>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: '#fff', borderRadius: '24px', p: 2.5, boxShadow: '0 2px 10px rgba(15, 23, 42, 0.06)',border:'1px solid #ebe9e9' }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>
          Companies
        </Typography>
        <Box className="ag-theme-alpine" style={{ height: 350, width: '100%' }}>
          <AgGridReact
            rowData={companies}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={10}
            // paginationPageSizeSelector={false}
            domLayout="normal"
            suppressHorizontalScroll={false}
            rowHeight={45}
            suppressPaginationPanel={false}
          />
        </Box>
        <Box sx={{ mt: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '12px' }}>
            Showing {companies.length} of {companies.length} companies
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Company;
