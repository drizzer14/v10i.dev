import styled from 'styled-components';

import { size } from '@/shared/mixin';

import { Button } from '../../../button';

export const Copy = styled(Button)`
  --color: var(--faint-strong-line);
  --interaction-color: var(--faint-strong-text);

  --border-width: 2px;
  --size: calc(1.5rem + var(--border-width));

  position: absolute;
  top: calc(3rem - 1px);
  right: 2rem;

  ${size('var(--size)')};

  border-radius: 0.5rem;
  border: var(--border-width) solid var(--base-weak-background);

  &:hover,
  &:focus {
    border-color: var(--interaction-background-color);
  }

  &[data-copied] {
    color: var(--accent-strong);

    background-color: var(--accent-weak-down);

    &,
    &:hover,
    &:focus {
      border-color: var(--accent-weak-down);
    }
  }

  & > svg {
    ${size('0.75rem')};
  }
`;
