import * as React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
//import { useAuth } from './auth/AuthProvider';
import { useAuth } from './auth/useAuth';

function NavBar() {
  const auth = useAuth();

  return (
    // display navigation bar with "sign out" button at top of screen
    <AppBar
      className="NavBar"
      position="static"
      color="Black"
      sx={{ boxShadow: 'none', height: 80 }}
    >
      <Toolbar>
        <Button color="White" onClick={auth.signOut}>
          <h1>Sign Out</h1>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
