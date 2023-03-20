import { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//creates a context object.
//Components subscribed to this will
//read the current context value (ie, auth) from the closest matching Provider
const authContext = createContext();

//provider component that wraps app and makes auth object
//available to any child component that calls useAuth
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

//useAuth custom hook for child compenents to get the auth obj
export function useAuth() {
  //useContext hook returns value (ie, auth) from provider component
  return useContext(authContext);
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
      setUser(newUser);
      //nav to home, second arg replaces history so users
      //can't click back to signin
      navigate('/', { replace: true });
    } else {
      // we'll want to return/ display error message on page
    }
  };
  const signIn = (credentials) => {
    //*Add fetch request here */
    //newUser is user provided from api request
    //for now this is hard-coded with a mock user obj
    const newUser = { isAuthed: true };
    if (newUser.isAuthed) {
      setUser(newUser);
      //nav to home, second arg replaces history so users
      //can't click back to signin
      navigate('/', { replace: true });
    } else {
      // we'll want to return/ display error message on page
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
