import React, { useState } from 'react';
import { Typography, Box, Paper, Button, Chip } from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import AddIcon from '@mui/icons-material/Add';

const Dashboard = () => {
  const [filters, setFilters] = useState({
    branch: true,
    node: true,
    team: true,
    manager: true,
    employees: true,
    count: true
  });

  return (
    <Box sx={{ p: '2vh 2vw', backgroundColor: '#ffffff' }}>
      {/* Breadcrumb */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: '1.5vh', fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)' }}>
        Admin / Organization Dashboard
      </Typography>

      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '3vh' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: '1vh', fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
            Organization Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}>
            Visualize your complete organization hierarchy — branches, teams, managers, and users at a glance.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<DownloadOutlinedIcon />}
            sx={{
              textTransform: 'none',
              padding: 'clamp(8px, 1vh, 12px) clamp(14px, 1.5vw, 20px)',
              borderRadius: '10px',
              borderColor: '#e5e5e5',
              backgroundColor: '#f5f5f7',
              color: '#333',
              fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#ededf0',
                borderColor: '#dcdcdc',
                boxShadow: '0 2px 6px rgba(0,0,0,0.07)',
              },
            }}
          >
            Export structure
          </Button>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              textTransform: 'none',
              padding: 'clamp(8px, 1vh, 12px) clamp(14px, 1.5vw, 20px)',
              fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)',
              fontWeight: 600,
              borderRadius: '10px',
              backgroundColor: '#d4a017',
              color: '#fff',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#b8851a',
                boxShadow: '0 3px 10px rgba(0,0,0,0.12)',
              },
            }}
          >
            Add branch / team
          </Button>
        </Box>
      </Box>

      {/* KPI Cards */}
      <Box sx={{ display: 'flex', gap: '2vw', mb: '3vh' }}>
        <Paper elevation={3} sx={{ borderRadius: 3, flex: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.06)', background: '#fff', padding: '2vh 1.5vw 0.5vh', border: '1px solid #f1f1f1' }}>
          <Typography variant="body1" sx={{ fontWeight: 500, color: '#666', mb: '3vh', fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}>Total branches</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>2</Typography>
            <Chip label="Across India" sx={{ backgroundColor: '#e0e0e0', color: '#666', borderRadius: 5, px: 1, fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }} />
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ borderRadius: 3, flex: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.06)', background: '#fff', padding: '2vh 1.5vw 0.5vh', border: '1px solid #f1f1f1' }}>
          <Typography variant="body1" sx={{ fontWeight: 500, color: '#666', mb: '3vh', fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}>Total teams</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>4</Typography>
            <Chip label="Sales & Design" sx={{ backgroundColor: '#4caf50', color: 'white', borderRadius: 5, px: 1, fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }} />
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ borderRadius: 3, flex: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.06)', background: '#fff', padding: '2vh 1.5vw 0.5vh', border: '1px solid #f1f1f1' }}>
          <Typography variant="body1" sx={{ fontWeight: 500, color: '#666', mb: '3vh', fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}>Total users</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>10</Typography>
            <Chip label="Employees" sx={{ backgroundColor: '#2196f3', color: 'white', borderRadius: 5, px: 1, fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }} />
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ borderRadius: 3, flex: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.06)', background: '#fff', padding: '2vh 1.5vw 0.5vh', border: '1px solid #f1f1f1' }}>
          <Typography variant="body1" sx={{ fontWeight: 500, color: '#666', mb: '3vh', fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}>Total managers</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>2</Typography>
            <Chip label="People managers" sx={{ backgroundColor: '#ff9800', color: 'white', borderRadius: 5, px: 1, fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }} />
          </Box>
        </Paper>
      </Box>

      {/* Hierarchy View */}
      <Box sx={{ borderRadius: 3, overflow: 'hidden',background:'#F3F6F7',padding:'1vh 2vw' }}>
        <Box sx={{ padding:'1vh 1vw 1.5vh', backgroundColor: '#F3F6F7' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>Hierarchy view</Typography>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Button size="small" sx={{ textTransform: 'none', color: '#666', fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)' }}>
                Collapse all
              </Button>
              <Chip 
                label="Branch" 
                size="small" 
                clickable
                onClick={() => setFilters({...filters, branch: !filters.branch})}
                variant={filters.branch ? "filled" : "outlined"}
                sx={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }} 
              />
              <Chip 
                label="Node" 
                size="small" 
                clickable
                onClick={() => setFilters({...filters, node: !filters.node})}
                variant={filters.node ? "filled" : "outlined"}
                sx={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }} 
              />
              <Chip 
                label="Team" 
                size="small" 
                clickable
                onClick={() => setFilters({...filters, team: !filters.team})}
                variant={filters.team ? "filled" : "outlined"}
                sx={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }} 
              />
              <Chip 
                label="Manager" 
                size="small" 
                clickable
                onClick={() => setFilters({...filters, manager: !filters.manager})}
                variant={filters.manager ? "filled" : "outlined"}
                sx={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }} 
              />
              <Chip 
                label="Employees" 
                size="small" 
                clickable
                onClick={() => setFilters({...filters, employees: !filters.employees})}
                sx={{ 
                  backgroundColor: filters.employees ? '#4caf50' : 'transparent', 
                  color: filters.employees ? 'white' : '#666',
                  border: filters.employees ? 'none' : '1px solid #ccc',
                  fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' 
                }} 
              />
              <Chip 
                label="Count" 
                size="small" 
                clickable
                onClick={() => setFilters({...filters, count: !filters.count})}
                variant={filters.count ? "filled" : "outlined"}
                sx={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }} 
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{backgroundColor: '#ffffff',borderRadius:'24px',boxShadow:'0 2px 10px rgba(15, 23, 42, 0.06)',padding:'1.5vh 1vw' }}>
          {/* Organization */}
          <Box sx={{ 
            borderRadius: '24px',
            backgroundColor: '#fff',
            boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
            padding: '16px 12px',
            mb: 2,
            display: 'flex', 
            alignItems: 'center'
          }}>
            <Box sx={{ 
              backgroundColor: '#d19a1ebf', 
              color: 'white', 
              px: 2, 
              py: 0.5, 
              borderRadius: 16,
              mr: 2 
            }}>
              <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '12px' }}>
                Organization
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 600, mr: 2 }}>
              ABC Company
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
              Managers: 2  Employees: 10
            </Typography>
            <Box sx={{ ml: 'auto', backgroundColor: '#fef3c7', px: 2, py: 0.5, borderRadius: 10 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '13px' }}>
                2 branches • 4 teams • 10 users
              </Typography>
            </Box>
          </Box>

          {/* Chennai Branch */}
          {filters.branch && (
            <Box sx={{ ml: 4, mb: 3 }}>
              <Box sx={{ 
                borderRadius: '24px',
                backgroundColor: '#fff',
                boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
                padding: '16px 12px',
                mb: 2,
                display: 'flex', 
                alignItems: 'center'
              }}>
                <Box sx={{ 
                  backgroundColor: '#d19a1ebf', 
                  color: 'white', 
                  px: 2, 
                  py: 0.5, 
                  borderRadius: 16,
                  mr: 2 
                }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '12px' }}>
                    Branch
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 600, mr: 2 }}>
                  Chennai Branch
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                  Region: South
                </Typography>
                <Box sx={{ ml: 'auto', backgroundColor: '#fef3c7', px: 2, py: 0.5, borderRadius: 10 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '13px' }}>
                    2 teams • 1 manager • 6 employees
                  </Typography>
                </Box>
              </Box>

              {/* Sales Team */}
              {filters.team && (
                <>
                  <Box sx={{ ml: 6, mb: 2 }}>
                    <Box sx={{ 
                      borderRadius: '24px',
                      backgroundColor: '#fff',
                      boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
                      padding: '16px 12px',
                      display: 'flex', 
                      alignItems: 'center'
                    }}>
                      <Box sx={{ 
                        backgroundColor: '#EEF2F3',
                        color:'#6B7280', 
                        px: 2, 
                        py: 0.5, 
                        borderRadius: 16,
                        mr: 2 
                      }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '12px' }}>
                          Team
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ fontWeight: 500, mr: 2 }}>
                        Sales Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                        Branch: Chennai  Manager: Raj  Employees: A, B, C
                      </Typography>
                      <Box sx={{ ml: 'auto', backgroundColor: '#e3f2fd', px: 2, py: 0.5, borderRadius: 10 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '13px' }}>
                          3 employees • Sales
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Design Team */}
                  <Box sx={{ ml: 6, mb: 2 }}>
                    <Box sx={{ 
                      borderRadius: '24px',
                      backgroundColor: '#fff',
                      boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
                      padding: '16px 12px',
                      display: 'flex', 
                      alignItems: 'center'
                    }}>
                      <Box sx={{ 
                        backgroundColor: '#EEF2F3',
                        color:'#6B7280',
                        px: 2, 
                        py: 0.5, 
                        borderRadius: 16,
                        mr: 2 
                      }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '12px' }}>
                          Team
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ fontWeight: 500, mr: 2 }}>
                        Design Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                        Branch: Chennai  Manager: Kumar  Employees: D, E, F
                      </Typography>
                      <Box sx={{ ml: 'auto', backgroundColor: '#e3f2fd', px: 2, py: 0.5, borderRadius: 10 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '13px' }}>
                          3 employees • Design
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          )}

          {/* Hyderabad Branch */}
          {filters.branch && (
            <Box sx={{ ml: 4 }}>
              <Box sx={{ 
                borderRadius: '24px',
                backgroundColor: '#fff',
                boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
                padding: '16px 12px',
                mb: 2,
                display: 'flex', 
                alignItems: 'center'
              }}>
                <Box sx={{ 
                  backgroundColor: '#d19a1ebf', 
                  color: 'white', 
                  px: 2, 
                  py: 0.5, 
                  borderRadius: 16,
                  mr: 2 
                }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '12px' }}>
                    Branch
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 600, mr: 2 }}>
                  Hyderabad Branch
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                  Region: South
                </Typography>
                <Box sx={{ ml: 'auto', backgroundColor: '#fef3c7', px: 2, py: 0.5, borderRadius: 10 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '13px' }}>
                    2 teams • 1 manager • 4 employees
                  </Typography>
                </Box>
              </Box>

              {/* Sales Team */}
              {filters.team && (
                <>
                  <Box sx={{ ml: 6, mb: 2 }}>
                    <Box sx={{ 
                      borderRadius: '24px',
                      backgroundColor: '#fff',
                      boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
                      padding: '16px 12px',
                      display: 'flex', 
                      alignItems: 'center'
                    }}>
                      <Box sx={{ 
                       backgroundColor: '#EEF2F3',
                        color:'#6B7280', 
                        px: 2, 
                        py: 0.5, 
                        borderRadius: 16,
                        mr: 2 
                      }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '12px' }}>
                          Team
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ fontWeight: 500, mr: 2 }}>
                        Sales Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                        Branch: Hyderabad  Manager: Not assigned  Employees: 2
                      </Typography>
                      <Box sx={{ ml: 'auto', backgroundColor: '#e3f2fd', px: 2, py: 0.5, borderRadius: 10 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '13px' }}>
                          2 employees • Sales
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Design Team */}
                  <Box sx={{ ml: 6 }}>
                    <Box sx={{ 
                      borderRadius: '24px',
                      backgroundColor: '#fff',
                      boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
                      padding: '16px 12px',
                      display: 'flex', 
                      alignItems: 'center'
                    }}>
                      <Box sx={{ 
                       backgroundColor: '#EEF2F3',
                        color:'#6B7280', 
                        px: 2, 
                        py: 0.5, 
                        borderRadius: 16,
                        mr: 2 
                      }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '12px' }}>
                          Team
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ fontWeight: 500, mr: 2 }}>
                        Design Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                        Branch: Hyderabad  Manager: Not assigned  Employees: 2
                      </Typography>
                      <Box sx={{ ml: 'auto', backgroundColor: '#e3f2fd', px: 2, py: 0.5, borderRadius: 10 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '13px' }}>
                          2 employees • Design
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
