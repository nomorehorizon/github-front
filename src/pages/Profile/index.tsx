import React from 'react';

import { 
  Container, 
  Main, 
  LeftSide, 
  RightSide, 
  Repos, 
  CalendarHeading 
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

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

        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'nomorehorizon'}
                  reponame={'github-front'}
                  description={'Reproduzindo a interface do GitHub com React.js, incluindo navegação por rotas, responsividade e dark theme'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={0}
                  forks={0}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;