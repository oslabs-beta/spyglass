import * as React from 'react';
import {
  Drawer,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CloudIcon from '@mui/icons-material/Cloud';
import { Link } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';

const drawerWidth = 290;
function SideBar() {
  return (
    // Drawer displays spyglass logo and links to various dashboards
    <Drawer
      className="sideBar"
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: '#1a1a1a',
          color: '#fff'
        }
      }}
      variant="permanent"
      anchor="left"
    >
      <AnimatedLogo />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Local Cluster Metrics" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CloudIcon />
            </ListItemIcon>
            <Link to="/cloud">
              <ListItemText primary="Cloud Cluster Metrics" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PriceChangeIcon />
            </ListItemIcon>
            <Link to="/cost">
              <ListItemText primary="Cost Analysis" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RemoveRedEyeIcon />
            </ListItemIcon>
            <Link to="/visual">
              <ListItemText primary="Cluster Visualizer" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideBar;
