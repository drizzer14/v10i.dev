import styled from 'styled-components';

import { nonMobileWithGap } from '@/shared/mixin';

export const Anchor = styled.a`
  --interaction-color: var(--faint-strong-up);

  position: relative;

  color: var(--base-strong-up);

  &:hover,
  &:focus {
    color: var(--interaction-color);

    h1,
    h2,
    h3,
    h4,
    h5 {
      color: var(--interaction-color);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    scroll-margin-top: 1rem;
  }

  h1 {
    margin-bottom: 2rem;
  }

  h2,
  h3,
  h4 {
    margin-bottom: 1rem;
  }

  h5 {
    margin-bottom: 0.5rem;
  }

  ${nonMobileWithGap`
    h1,
    h2,
    h3,
    h4,
    h5 {
      &:before {
        position: absolute;
        right: calc(100% + 8px);

        color: var(--interaction-color);

        opacity: 0;

        transition: 150ms;

        content: '#';
      }
    }

    &:hover,
    &:focus {
      h1,
      h2,
      h3,
      h4,
      h5 {
        &:before {
          right: calc(100% + 4px);

          opacity: 1;
        }
      }
    }
 `}
`;
