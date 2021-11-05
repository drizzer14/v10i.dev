import styled from 'styled-components';

import { nonMobile, size } from '@/shared/mixin';

export const Language = styled.span<{
  language: string;
}>`
  --icon-size: calc(2 / 3 * 1rem);

  position: relative;

  display: block;
  align-self: flex-start;

  padding: 2px var(--icon-size) 0 2rem;

  color: var(--faint-strong-text);

  font-family: var(--font-base);

  background-color: var(--faint-weak-background);
  background-image: ${({ language }) =>
    `url('/assets/icons/languages/${language}.svg')`};
  background-repeat: no-repeat;
  background-position: calc(var(--icon-size) + 2px) calc(50% + 1px);
  background-size: var(--icon-size);

  border-top-right-radius: 0.5rem;

  ${nonMobile`
    border-top-left-radius: 0.5rem;
  `}

  &:after {
    position: absolute;
    right: -1rem;
    bottom: 0;

    ${size('1rem')};

    border-bottom-left-radius: 50%;

    box-shadow: 0 0.5rem 0 0 var(--faint-weak-background);

    content: '';
  }
`;
