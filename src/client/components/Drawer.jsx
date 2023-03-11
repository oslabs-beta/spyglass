import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material';
import ListItemButton from '@mui/material';
import ListItemIcon from '@mui/material';
import { Link } from '@mui/material';

const drawerWidth = 240;

export default function Drawer() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{/* {icon for } */}</ListItemIcon>
            <ListItemText primary="Cluster Metrics" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{/* {icon for } */}</ListItemIcon>
            <ListItemText primary="Cost Analysis" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{/* {icon for } */}</ListItemIcon>
            <ListItemText primary="Alerts" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
