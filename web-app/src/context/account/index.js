import React, {
  createContext,
  useState,
  useEffect,
  useMemo
} from 'react';

const localRole = localStorage.getItem('role');

const initialRole = 'guest';

export const AccountContext = createContext();

export default function AccountProvider(props) {

  const [role, setRole] = useState(localRole || initialRole);

  useEffect(() => {
    localStorage.setItem('role', role);
  }, [role]);

  const contextValue = useMemo(
    () => ({ role,
      setRole }),
    [role, setRole]
  );

  return (
    <AccountContext.Provider value={contextValue}>
      {props.children}
    </AccountContext.Provider>
  );
}
