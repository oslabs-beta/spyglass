import * as React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

function NavBar() {
  return (
    <AppBar
      className="NavBar"
      position="static"
      color="Black"
      sx={{ boxShadow: 'none' }}
    >
      <Toolbar>
        <Button color="White">
          <h2>Sign out</h2>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
