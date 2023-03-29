import { createContext } from 'react';

//Child components of AuthProvider will read the current context value (ie, auth) from AuthProvider
export const authContext = createContext();
