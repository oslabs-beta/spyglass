import * as React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

function NavBar() {
  return (
    <AppBar className="NavBar" position="static" color="DarkBlue">
      <Toolbar>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
