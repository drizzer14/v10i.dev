import styled from 'styled-components';

import { size } from '@/shared/mixin';
import { Icon } from '@/shared/components';

export const Title = styled.a`
  display: flex;
  align-items: center;

  margin-right: 1.5rem;

  color: var(--base-strong-text);

  transition: 150ms;

  &:hover,
  &:focus {
    color: var(--faint-strong-text);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const Logo = styled(Icon).attrs({
  name: 'logo',
})`
  ${size('1.5rem')};

  margin-right: 1px;
`;
