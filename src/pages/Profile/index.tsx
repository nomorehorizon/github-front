import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'nomorehorizon'}
            name={'Lucas Machado'}
            avatarUrl={'https://avatars.githubusercontent.com/u/78392378?s=460&u=27efd3a3329fe00bc703b27ddc6606eb7272e248&v=4'}
            followers={0}
            following={0}
            company={undefined}
            location={'Curitiba, Brazil'}
            email={'lmachado72@outlook.com'}
            blog={undefined}
          />
        </LeftSide>

        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;