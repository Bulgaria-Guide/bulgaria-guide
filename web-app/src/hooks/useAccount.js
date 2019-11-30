import { AccountContext } from '../context/account';
import { useContext } from 'react';

export default function useAccount() {
  return useContext(AccountContext);
}
