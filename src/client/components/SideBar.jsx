import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import {
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon
} from '@mui/material';
import { Link } from 'react-router-dom';
import spyglass from '../../../assets/logo-no-background.png';

const drawerWidth = 240;
function SideBar() {
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
      <img src={spyglass} className="spyglass-logo" alt="spyglass-logo" />
      <Toolbar />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{/* {icon for } */}</ListItemIcon>
            <Link to="/cluster">
              <ListItemText primary="Cluster Metrics" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{/* {icon for } */}</ListItemIcon>
            <Link to="/cost">
              <ListItemText primary="Cost Analysis" />
            </Link>
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

export default SideBar;
