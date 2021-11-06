import styled from 'styled-components';

import { mobileWidth } from '@/shared/mixin';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 100%;

  width: 100%;
  max-width: ${mobileWidth}px;

  padding: 2rem 0;
`;
