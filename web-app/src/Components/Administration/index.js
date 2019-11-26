import React from 'react';
import ContainerLayout from '../UI/ContainerLayout';
import SightsList from '../Sights/List';

const Administration = props => {
    return (
        <ContainerLayout header={"Administration"}>
          <SightsList />
        </ContainerLayout>
    );
}

export default Administration;