import styled from 'styled-components';

import { size } from '@/shared/mixin';

import type { LinkProps } from './link.props';

export const Link = styled.a<Pick<LinkProps, 'iconSizeModifier'>>`
  display: flex;
  align-items: center;

  width: 100%;

  color: var(--faint-strong-text);

  &:hover,
  &:focus {
    color: var(--base-strong-text);
  }

  & > svg {
    ${({ iconSizeModifier = 1 }) => size(`${0.75 * iconSizeModifier}rem`)}

    margin-right: 0.5rem;
  }

  & > span > small {
    margin-bottom: -1px;
  }
`;
