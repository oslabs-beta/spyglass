import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from './authContext';

//provider component that wraps app and makes auth object
//available to any child component that calls useAuth
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

//Provider hook creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const signUp = (credentials) => {
    //*Add fetch request here */
    //newUser is user provided from api request
    //for now this is hard-coded with a mock user that is authed

    const newUser = { isAuthed: true };

    if (newUser.isAuthed) {
      //nav to home, second arg replaces history so users
      //can't click back to signin
      setUser(newUser);
      navigate('/', { replace: true });
    } else {
      // we'll want to return/ display error message on page
    }
  };
  const signIn = (credentials) => {
    //*Add fetch request here */
    //newUser is user provided from api request
    //for now this is hard-coded with a mock user obj
    //lines 47-51 fake

    const newUser = { isAuthed: false };
    const { username, password } = credentials;
    if (username === 'spyglass' && password === 'acet') {
      newUser.isAuthed = true;
    }

    if (newUser.isAuthed) {
      setUser(newUser);
      //nav to home, second arg replaces history so users
      //can't click back to signin
      navigate('/', { replace: true });
    }
  };

  const signOut = () => {
    //make fetch here if we need to update user status in DB
    //credentials will be on user
    setUser(null);
    navigate('/signin', { replace: true });
  };

  //return auth object and auth methods
  return {
    user,
    signUp,
    signIn,
    signOut
  };
}
