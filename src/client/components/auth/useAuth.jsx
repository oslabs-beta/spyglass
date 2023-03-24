import { useContext } from 'react';
import { authContext } from './authContext';

//useAuth custom hook for child compenents to get the auth obj
export function useAuth() {
  //useContext hook returns value (ie, auth) from provider component
  return useContext(authContext);
}
