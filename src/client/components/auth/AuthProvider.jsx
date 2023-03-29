import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from './authContext';

//provider component that wraps app and makes auth object returned by useProvideAuth
//available to any child component that calls useAuth
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

//Provider hook creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //signUp method creates user in DB,
  //if account is valid, update user in state and return user
  const signUp = async (credentials) => {
    const response = await fetch('http://localhost:3333/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(credentials)
    });

    const newUser = await response.json();

    if (typeof newUser === 'object') {
      setUser(newUser);
      return newUser;
    } else {
      return null;
    }
  };
  //signin method verifies user
  //if account is valid, update user in state and return user
  const signIn = async (credentials) => {
    const response = await fetch('http://localhost:3333/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(credentials)
    });

    const newUser = await response.json();

    if (typeof newUser === 'object') {
      setUser(newUser);
      return newUser;
    } else {
      return null;
    }
  };

  //signout, sets user to null and returns to signin page
  const signOut = () => {
    setUser(null);
    navigate('/signin', { replace: true });
  };

  //useProvideAuth return auth object and auth methods
  return {
    user,
    signUp,
    signIn,
    signOut
  };
}
