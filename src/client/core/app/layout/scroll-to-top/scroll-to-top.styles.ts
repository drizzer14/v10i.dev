import styled from 'styled-components';

import { Button } from '@/shared/components';
import { remToPx } from '@/shared/mixin/converters';
import { mobileWidth, nonMobile, nonMobileWithGap, size } from '@/shared/mixin';

export const ScrollToTop = styled(Button)`
  --color: var(--faint-strong-line);
  --interaction-color: var(--faint-strong-text);

  --border-width: 2px;
  --size: calc(3rem + var(--border-width));

  position: fixed;
  right: 2rem;
  bottom: calc(var(--size) * -1);

  align-self: flex-end;

  ${size('var(--size)')};

  border-radius: 1rem;
  border: var(--border-width) solid var(--base-weak-background);

  &[data-visible='true'] {
    bottom: 2rem;
  }

  &:hover,
  &:focus {
    border-color: var(--interaction-background-color);
  }

  ${nonMobile`
    right: calc((100vw - ${mobileWidth}px) / 2 + 2rem);

    &[data-visible='true'] {
      bottom: 4rem;
    }
  `}

  ${nonMobileWithGap`
    right: calc((100vw - ${mobileWidth}px) / 2);
  `}

  @media screen and (min-width: ${mobileWidth + remToPx(18)}px) {
    right: calc((100vw - ${mobileWidth}px) / 2 - var(--size) - 4rem);
  }

  & > svg {
    ${size('1.25rem')};
  }
`;
