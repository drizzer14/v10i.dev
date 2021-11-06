import styled from 'styled-components';

import { Image } from '@/shared/components';
import { Meta as PostMeta } from '@/posts/shared/components';
import { nonMobileWithGap, mobileWidth, nonMobile } from '@/shared/mixin';

export const Post = styled.article`
  position: relative;

  max-width: ${mobileWidth}px;
  width: 100%;

  padding: 0 2rem;

  & > p {
    margin-bottom: 1rem;
  }

  & > *:last-child {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${nonMobileWithGap`
    padding: 0;
  `}
`;

export const Title = styled.h1`
  margin-bottom: 0.5rem;
`;

export const Meta = styled(PostMeta)`
  margin-bottom: 1rem;
`;

export const Hero = styled(Image)`
  position: relative;
  left: -2rem;

  width: calc(100% + 4rem);

  margin-bottom: 2rem;

  & > img {
    border-radius: 0;

    ${nonMobile`
      border-radius: var(--border-radius);
    `}
  }
`;
