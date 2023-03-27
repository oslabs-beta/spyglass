import { createContext } from 'react';
//creates a context object.
//Components subscribed to this will
//read the current context value (ie, auth) from the closest matching Provider
export const authContext = createContext();
