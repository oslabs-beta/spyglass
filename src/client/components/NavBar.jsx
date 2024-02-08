import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, List, ListItem, ListItemText, Drawer, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BarChart, Cloud, MonetizationOn, RemoveRedEye } from '@mui/icons-material'; // Import necessary icons
import Logo from './Logo'; // Assuming you have a Logo component

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" sx={{ height: '3.25rem', bgcolor: '#1a1a1af4', color: '#fff' }}>
      <Toolbar>
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        {!isMobile && (
          <List sx={{ ml: 'auto' }}>
            <ListItem disablePadding>
              <Button color="inherit" sx={{ color: '#fff' }}>Sign Out</Button>
            </ListItem>
          </List>
        )}
      </Toolbar>
      <Drawer
        anchor="left"
        open={isMobile && drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: '#1a1a1a',
            padding: '2rem',
          },
        }}
      >
        <List>
          <ListItem button>
            <BarChart sx={{ color: '#fff' }} />
            <ListItemText primary="Local Cluster Metrics" sx={{ color: '#fff', marginLeft: '1rem' }} />
          </ListItem>
          <ListItem button>
            <Cloud sx={{ color: '#fff' }} />
            <ListItemText primary="Cloud Cluster Metrics" sx={{ color: '#fff', marginLeft: '1rem' }} />
          </ListItem>
          <ListItem button>
            <MonetizationOn sx={{ color: '#fff' }} />
            <ListItemText primary="Cost Analysis" sx={{ color: '#fff', marginLeft: '1rem' }} />
          </ListItem>
          <ListItem button>
            <RemoveRedEye sx={{ color: '#fff' }} />
            <ListItemText primary="Cluster Visualizer" sx={{ color: '#fff', marginLeft: '1rem' }} />
          </ListItem>
        </List>
        <Divider sx={{ bgcolor: '#fff' }} />
        <List>
          <ListItem button>
            <ListItemText primary="Sign Out" sx={{ color: '#fff' }} />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
