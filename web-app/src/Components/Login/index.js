import React, { useContext } from 'react';
import LoginForm from './Form';
import ContainerLayout from '../UI/ContainerLayout';
import { AccountContext } from '../../context/account';

const Login = () => {
  const { role, setRole } = useContext(AccountContext);

  return (
    <ContainerLayout header="">

      <a class="waves-effect waves-light btn-large" disabled={role === 'admin'}
        onClick={() => setRole('admin')}>Go admin</a>
      <LoginForm />
    </ContainerLayout>
  );
};

export default Login;

