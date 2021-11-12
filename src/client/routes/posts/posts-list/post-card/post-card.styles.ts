import styled from 'styled-components';

import { nonMobile } from '@/shared/mixin';
import { Image } from '@/shared/components';

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Hero = styled(Image)`
  position: relative;
  left: -2rem;

  width: calc(100% + 4rem);

  margin-top: 0;

  & > img {
    border-radius: 0;
  }

  ${nonMobile`
    position: static;

    width: 100%;

    & > img {
      border-radius: var(--border-radius);
    }
  `}
`;

export const Title = styled.h3`
  margin-bottom: 0.5rem;

  color: var(--base-strong);

  transition: color 150ms;
`;

export const Link = styled.a`
  & > ${Hero} {
    transition: opacity 150ms;
  }

  &:hover,
  &:focus {
    & > ${Title} {
      color: var(--faint-strong-up);
    }

    & > ${Hero} {
      opacity: 0.5;
    }
  }
`;

export const Description = styled.div`
  margin-top: 1rem;
`;
