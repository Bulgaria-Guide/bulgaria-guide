import { AccountContext } from '../context/account';
import { useContext, useMemo, useCallback } from 'react';

const RoleType = {
  'admin': 'admin',
  'user': 'user',
  'guest': 'guest'
};

export default function useRole() {
  const { role, setRole } = useContext(AccountContext);

  const isAdmin = useMemo(
    () => role === RoleType.admin,
    [role]
  );

  const isLoggedIn = useMemo(
    () => role === RoleType.admin || role === RoleType.user,
    [role]
  );

  const loginAs = useCallback(newRole => setRole(newRole), [setRole]);

  const logout = useCallback(() => setRole('guest'), [setRole]);

  return {
    isAdmin,
    isLoggedIn,
    loginAs,
    logout
  };
}
