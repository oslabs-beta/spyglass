import * as React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useAuth } from './auth/AuthProvider';


function NavBar() {
  const auth = useAuth();

  return (
    <AppBar
      className="NavBar"
      position="static"
      color="DarkBlue"
      sx={{ boxShadow: 'none' }}
    >
      <Toolbar>
        <Button color="White" onClick={auth.signOut}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
