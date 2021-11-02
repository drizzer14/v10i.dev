import styled from 'styled-components';

import { mobileWidth, nonMobileWithGap } from '@/shared/mixin';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  width: 100%;
  max-width: ${mobileWidth}px;

  padding: 2rem;

  ${nonMobileWithGap`
    padding: 2rem 0;
  `}
`;
