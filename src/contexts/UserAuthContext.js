import React, {createContext, useState, useEffect} from 'react';

export const UserAuthContext = createContext([]);
const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

export const UserAuthProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    async function restore() {
      await waitFor(5000);
      setAppLoaded(true);
    }
    restore();
  }, []);
  return (
    <UserAuthContext.Provider value={{loggedIn, setLoggedIn, appLoaded}}>
      {children}
    </UserAuthContext.Provider>
  );
};
