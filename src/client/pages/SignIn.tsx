// import * as React from 'react';
// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../components/auth/useAuth';
// import AnimatedLogo from '../components/AnimatedLogo';
// import Alert from '@mui/material/Alert';

// function SignIn() {
//   const auth = useAuth();
//   const [loginFail, setLoginFail] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const username = formData.get('username');
//     const password = formData.get('password');
//     const authedUser = await auth.signIn({ username, password });
//     if (authedUser) {
//       navigate('/', { replace: true });
//     } else {
//       setLoginFail(true);
//     }
//   };

//   return (
//     <div className="formWrapper">
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             padding: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             bgcolor: '#494949',
//             borderRadius: 5,
//             boxShadow: 15
//           }}
//         >
//           <AnimatedLogo />
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <Alert
//               variant="outlined"
//               severity="error"
//               sx={{ color: '#f4c7c7', display: loginFail ? 'flex' : 'none' }}
//             >
//               Invalid username or password. Please retry.
//             </Alert>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="Username"
//               name="username"
//               autoComplete="username"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item>
//                 <Link to="/signup" variant="body2">
//                   {"Don't have an account?"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </div>
//   );
// }

// export default SignIn;


import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/auth/useAuth';
import AnimatedLogo from '../components/AnimatedLogo';
import Alert from '@mui/material/Alert';

function SignIn() {
  const auth = useAuth();
  const [loginFail, setLoginFail] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const authedUser = await auth.signIn({ username, password });
    if (authedUser) {
      navigate('/', { replace: true });
    } else {
      setLoginFail(true);
    }
  };

  return (
    <div className="formWrapper">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#494949',
            borderRadius: 5,
            boxShadow: 15
          }}
        >
          <AnimatedLogo />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Alert
              variant="outlined"
              severity="error"
              sx={{ color: '#f4c7c7', display: loginFail ? 'flex' : 'none' }}
            >
              Invalid username or password. Please retry.
            </Alert>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default SignIn;
