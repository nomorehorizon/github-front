import styled, { css } from 'styled-components';
import { RiBookmarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

export const Container = styled.div`
  
`;

export const Topside  = styled.div`

`;

const iconCSS = css`
    width: 16px;
    height: 16px;
    fill: var(--icons);
    flex-shrink: 0;
`;

export const RepoIcon  = styled(RiBookmarkLine)`
    ${iconCSS};
`;

export const Botside  = styled.div`

`;

export const StarIcon  = styled(RiStarLine)`
    ${iconCSS};
`;

export const ForkIcon = styled(AiOutlineFork)`
    ${iconCSS};
`;

