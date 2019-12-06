import React, { useContext } from 'react';
import LoginForm from './Form';
import ContainerLayout from '../UI/ContainerLayout';
import { AccountContext } from '../../context/account';

const Login = () => {
  const { role, setRole } = useContext(AccountContext);

  return (
    <ContainerLayout header="Login">
      <button disabled={role === 'admin'} onClick={() => setRole('admin')}>Go Admin</button>
      <LoginForm />
    </ContainerLayout>
  );
};

export default Login;

