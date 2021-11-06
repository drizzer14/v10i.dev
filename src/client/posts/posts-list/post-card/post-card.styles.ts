import styled from 'styled-components';

import { nonMobileWithGap } from '@/shared/mixin';

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 0 2rem;

  ${nonMobileWithGap`
    padding: 0;
  `}
`;

export const Title = styled.h3`
  margin-bottom: 0.5rem;

  color: var(--base-strong);

  transition: color 150ms;
`;

export const Link = styled.a`
  & > figure {
    transition: opacity 150ms;
  }

  &:hover,
  &:focus {
    & > ${Title} {
      color: var(--faint-strong-up);
    }

    & > figure {
      opacity: 0.5;
    }
  }
`;

export const Description = styled.div`
  margin-top: 1rem;
`;
