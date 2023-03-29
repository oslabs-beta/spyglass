import { createContext } from 'react';
//creates a context object.
//Components subscribed to this will
//read the current context value (ie, auth) from Provider
export const authContext = createContext();
