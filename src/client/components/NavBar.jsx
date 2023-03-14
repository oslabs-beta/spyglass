import * as React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

function NavBar() {
  return (
    <AppBar
      className="NavBar"
      position="static"
      sx={{ bgcolor: '#0074d9', boxShadow: 'none' }}
    >
      <Toolbar>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
