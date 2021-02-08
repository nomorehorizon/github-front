import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Container, 
  Breadcrumb, 
  RepoIcon, 
  Stats, 
  StarIcon, 
  ForkIcon, 
  LinkButton, 
  GithubIcon 
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/nomorehorizon'}>
          nomorehorizon
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/nomorehorizon/github-front'}>
          github-front
        </Link>
      </Breadcrumb>

      <p>reproduzindo a interface do GitHub com React.js, incluindo navegação por rotas, responsividade e dark theme!</p>
      
      <Stats>
        <li>
          <StarIcon />
          <b>0</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/nomorehorizon/github-front'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;