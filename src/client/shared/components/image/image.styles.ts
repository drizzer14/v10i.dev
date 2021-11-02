import styled from 'styled-components';

import { nonMobile, nonMobileWithGap } from '@/shared/mixin';

export const Image = styled.figure`
  position: relative;
  left: -2rem;

  width: calc(100% + 4rem);
  height: auto;

  margin-bottom: 1rem;

  overflow: hidden;

  &,
  & > img {
    transition: none;
  }

  ${nonMobile`
    border-radius: 0.5rem;
  `}

  ${nonMobileWithGap`
    position: initial;

    width: 100%;
  `}

  & > img {
    object-fit: cover;
  }
`;
