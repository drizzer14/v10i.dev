import styled from 'styled-components';

import { nonMobileWithGap } from '@/shared/mixin';

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 2rem;

  margin-top: 5%;

  & > p {
    margin-bottom: 4rem;
  }

  ${nonMobileWithGap`
    padding: 0;

    margin-top: 25%;
  `}
`;
