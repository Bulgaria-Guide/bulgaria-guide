import React, { useContext } from 'react';
import Text from '../UI/Text';
import RegisterForm from './Form';
import ContainerLayout from '../UI/ContainerLayout';
import { AccountContext } from '../../context/account';

const Register = () => {
  const { role, setRole } = useContext(AccountContext);

  return (
    <ContainerLayout header="Login">
      <RegisterForm />
    </ContainerLayout>
  );
};

export default Register;

