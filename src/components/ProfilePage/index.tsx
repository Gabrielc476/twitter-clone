import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton  } from './styles';
 
import Feed from '../Feed'

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar/>
        </Banner>


        <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>

            <h1>Gabriel Castro</h1>
            <h2>@Gabriel_c</h2>

            <p>Estudante</p>

            <ul>
                <li>
                    <LocationIcon/>
                    João Pessoa, Brasil
                </li>
                <li>
                    <CakeIcon/>
                    nascido em 20 de maio de 2003
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>94</strong>
                </span>
                <span>
                    <strong>672</strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed/>
    </Container>
  );
}

export default ProfilePage;