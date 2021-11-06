import styled from 'styled-components';

import { mobileWidth, nonMobile, nonMobileWithGap } from '@/shared/mixin';

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

  ${nonMobile`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > *:not(:first-child) {
      margin-top: 0;
    }
  `}

  ${nonMobileWithGap`
    padding: 1rem 0 2rem;
  `}
`;
