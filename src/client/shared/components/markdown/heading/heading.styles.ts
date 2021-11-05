import styled, { css } from 'styled-components';

import { nonMobileWithGap } from '@/shared/mixin';

export const Heading = styled.h2<{ as: string }>(({ as }) => {
  switch (as) {
    case 'h5': {
      return css`
        margin: 1rem 0 0.5rem;
      `;
    }
    default: {
      return css`
        margin: 2rem 0 1rem;
      `;
    }
  }
});

export const Anchor = styled.a`
  --interaction-color: var(--faint-strong-up);

  position: relative;

  color: var(--base-strong-up);

  scroll-margin-top: 1rem;

  &:hover,
  &:focus {
    color: var(--interaction-color);
  }

  ${nonMobileWithGap`
    &:before {
      position: absolute;
      right: calc(100% + 8px);

      color: var(--interaction-color);

      opacity: 0;

      transition: 150ms;

      content: '#';
    }

    &:hover,
    &:focus {
      &:before {
        right: calc(100% + 4px);

        opacity: 1;
      }
    }
 `}
`;
