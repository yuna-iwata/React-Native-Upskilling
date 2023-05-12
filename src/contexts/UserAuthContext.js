import React, {createContext, useState} from 'react';

export const UserAuthContext = createContext([]);

export const UserAuthProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserAuthContext.Provider value={{loggedIn, setLoggedIn}}>
      {children}
    </UserAuthContext.Provider>
  );
};
