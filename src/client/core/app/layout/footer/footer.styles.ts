import styled from 'styled-components';

import { mobileWidth, nonMobileWithGap } from '@/shared/mixin';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  max-width: ${mobileWidth}px;

  padding: 0 2rem 2rem;

  color: var(--faint-strong-text);

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${nonMobileWithGap`
    padding: 1rem 0 2rem;
  `}
`;
