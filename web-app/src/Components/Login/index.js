import React, { useContext } from 'react';
import Text from '../UI/Text';
import ContainerLayout from '../UI/ContainerLayout';
import { AccountContext } from '../../context/account';

const Login = () => {
  const { role, setRole } = useContext(AccountContext);

  return (
    <ContainerLayout header="Login">
      <button disabled={role === 'guest'} onClick={() => setRole('guest')}>Go Guest</button>
      <button disabled={role === 'user'} onClick={() => setRole('user')}>Go User</button>
      <button disabled={role === 'admin'} onClick={() => setRole('admin')}>Go Admin</button>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla
        convallis lorem eget mollis. Aliquam volutpat mollis risus, ut tincidunt
        dui mattis venenatis. Etiam ultrices, nunc ullamcorper aliquet lobortis,
        velit dolor iaculis lacus, at iaculis est mauris vitae libero. Nulla
        aliquam dolor a velit fermentum, non ultrices elit efficitur. Ut eu dictum
        purus. Aliquam eleifend tempor nisl, ac mollis orci consequat in. Proin
        eget lectus pharetra, tempus justo eget, porta purus. Etiam mollis
        molestie tempus. Donec quis ex non felis porttitor blandit non id nisl.
        Pellentesque lobortis sed nulla vitae bibendum. Ut rhoncus posuere sapien
        a lobortis. Pellentesque euismod orci non scelerisque molestie. Aliquam
        posuere condimentum enim sed posuere. Vivamus lacinia nisi in orci
        suscipit, at aliquet sem tincidunt.
      </Text>
    </ContainerLayout>
  );
};

export default Login;
