import { AccountContext } from '../context/account';
import { useContext, useMemo, useCallback } from 'react';

const RoleType = {
  'admin': 'admin',
  'user': 'user',
  'guest': 'guest'
};

export default function useAccount() {
  const { role, setRole, authToken, setAuthToken } = useContext(AccountContext);

  const isAdmin = useMemo(
    () => role === RoleType.admin,
    [role]
  );

  const isLoggedIn = useMemo(
    () => role === RoleType.admin || role === RoleType.user,
    [role]
  );

  const loginAs = useCallback((role, token) => {
    setRole(role);
    setAuthToken(token);
  }, [setAuthToken, setRole]);

  const logout = useCallback(() => {
    setRole('guest');
    setAuthToken('');
  }, [setAuthToken, setRole]);

  return {
    isAdmin,
    isLoggedIn,
    loginAs,
    logout,
    authToken
  };
}
