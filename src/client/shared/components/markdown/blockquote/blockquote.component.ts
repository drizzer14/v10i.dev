import styled from 'styled-components';

import { nonMobile } from '@/shared/mixin';

export const Blockquote = styled.blockquote`
  position: relative;

  margin: 2rem -2rem;
  padding: 1.5rem 2rem;

  overflow: hidden;

  color: var(--faint-strong-text);

  background-color: var(--faint-weak-background);

  ${nonMobile`
    border-radius: 1rem;
  `}

  & > *:last-child {
    margin-bottom: 0;
  }
`;
