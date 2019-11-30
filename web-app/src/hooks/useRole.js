import { AccountContext } from '../context/account';
import { useContext, useMemo } from 'react';

const RoleType = {
  'admin': 'admin',
  'user': 'user',
  'guest': 'guest'
};

export default function useRole() {
  const { role } = useContext(AccountContext);

  const isAdmin = useMemo(
    () => role === RoleType.admin,
    [role]
  );

  const isLoggedIn = useMemo(
    () => role === RoleType.admin || role === RoleType.user,
    [role]
  );

  return { isAdmin,
    isLoggedIn };
}
