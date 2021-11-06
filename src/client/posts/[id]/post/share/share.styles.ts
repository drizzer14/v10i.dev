import styled from 'styled-components';

import { size } from '@/shared/mixin';
import { Button } from '@/shared/components';

export const Share = styled(Button)`
  position: relative;

  margin-top: 1rem;
  margin-bottom: 2rem;

  padding: 6px 0.75rem 8px;

  border-radius: 0.75rem;

  transition: 150ms;

  & > svg {
    ${size('0.625rem')};

    margin-right: 0.5rem;

    color: var(--faint-strong-line);
  }

  &:hover,
  &:focus {
    & > svg {
      color: var(--faint-strong-text);
    }
  }
`;
