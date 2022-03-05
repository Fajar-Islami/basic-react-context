import { createContext, useContext, useEffect, useState } from 'react';

export const AppContext = createContext({
  empty: true, // default value
});

// Reuse AppContext
export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const user = {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    };

    setUser(user);
  }, []);

  const appContextValue = {
    user,
    setUser,
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}
