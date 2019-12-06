import React, {
  createContext,
  useState,
  useEffect,
  useMemo
} from 'react';

const localRole = localStorage.getItem('role');
const initialRole = 'guest';

const localToken = localStorage.getItem('authToken');
const initialToken = '';

export const AccountContext = createContext();

export default function AccountProvider(props) {

  const [role, setRole] = useState(localRole || initialRole);
  const [authToken, setAuthToken] = useState(localToken || initialToken);

  useEffect(() => {
    localStorage.setItem('role', role);
  }, [role]);

  useEffect(() => {
    localStorage.setItem('authToken', authToken);
  }, [authToken]);

  const contextValue = useMemo(
    () => ({
      role,
      setRole,
      authToken,
      setAuthToken
    }),
    [authToken, role]
  );

  return (
    <AccountContext.Provider value={contextValue}>
      {props.children}
    </AccountContext.Provider>
  );
}
