import * as React from 'react';
import {
  Drawer,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon
} from '@mui/material';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import BarChartIcon from '@mui/icons-material/BarChart';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import { Link } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';

const drawerWidth = 240;
function SideBar() {
  return (
    // display drawer to spyglass logo and links to cluster metrics, cost analysis, and alerts pages
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
        {/* Local Cluster Metric List Item */}
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
        {/* Cloud Cluster Metrics List Item */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NotificationImportantIcon />
            </ListItemIcon>
            <Link to="/cloud">
              <ListItemText primary="Cloud Cluster Metrics" />
            </Link>
          </ListItemButton>
        </ListItem>
        {/* Cost Analysis List Item */}
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
        {/* Cluster Visualizer List Item */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PriceChangeIcon />
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
