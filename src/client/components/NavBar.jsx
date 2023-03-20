import * as React from 'react';
import { AppBar, Button } from '@mui/material';

function NavBar() {
  return (
    // display navigation bar with "sign out" button at top of screen
    <AppBar
      className="NavBar"
      position="static"
      color="Black"
      sx={{ boxShadow: 'none' }}
    >
      <Button color="White">
        <h2>Sign out</h2>
      </Button>
    </AppBar>
  );
}

export default NavBar;
