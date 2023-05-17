import React, {createContext, useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

export const UserAuthContext = createContext<UserAuthContext>({
  isLoggedIn: false,
  appLoaded: false,
  login: undefined!,
  logOut: undefined!,
});
// const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));
interface UserAuthContext {
  isLoggedIn: boolean;
  appLoaded: boolean;
  login: (token: string) => Promise<void>;
  logOut: () => Promise<void>;
}

export const UserAuthProvider = ({children}: {children: React.ReactNode}) => {
  //const [user, setUser] = useState(null);
  const [token, setToken] = useState<string | null>(null);
  const [appLoaded, setAppLoaded] = useState(false);
  const isLoggedIn = !!token;

  useEffect(() => {
    async function restore() {
      await restoreApp();
    }
    restore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const restoreApp = useCallback(async () => {
    const tempToken = await AsyncStorage.getItem('token');
    setToken(tempToken);
    // We might do more things here if the user is logged in
    // Get user profile
    // Check for notifications
    //setTimeout(function () {
    setAppLoaded(true);
    SplashScreen.hide();
    //}, 3000);
  }, []);

  const login = useCallback(async (newToken: string) => {
    await AsyncStorage.setItem('token', newToken);
    setToken(newToken);
  }, []);

  const logOut = useCallback(async () => {
    await AsyncStorage.clear();
    setToken(null);
  }, []);

  return (
    <UserAuthContext.Provider value={{appLoaded, isLoggedIn, login, logOut}}>
      {children}
    </UserAuthContext.Provider>
  );
};

export function useAuthContext() {
  return React.useContext(UserAuthContext);
}
