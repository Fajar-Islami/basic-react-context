import { createContext, useContext, useEffect, useReducer } from 'react';

export const AppContext = createContext({
  empty: true, // default value
});

// Reuse AppContext
export function useAppContext() {
  return useContext(AppContext);
}

function reducer(state, action) {
  switch (action.type) {
    case 'updateUser':
      return { ...state, user: action.payload };
    case 'toggleTheme':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      throw new Error(`Unhandled action type  ${action.type}`);
  }
}

const initialState = {
  user: {},
  theme: 'dark',
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    };

    dispatch({
      type: 'updateUser',
      payload: user,
    });
  }, []);

  const appContextValue = [state, dispatch]; // agar lebih clean code, destructing array

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}
