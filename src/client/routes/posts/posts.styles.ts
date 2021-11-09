import styled from 'styled-components';

import { nonMobile } from '@/shared/mixin';
import { Button } from '@/shared/components';

export const IncrementPageButton = styled(Button)`
  width: 100%;
  height: 3rem;

  margin-top: 6rem;

  ${nonMobile`
    border-radius: 0.5rem;
  `}
`;

export const EmptyDataMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5%;

  padding: 2rem;

  text-align: center;

  & > ul {
    margin-top: 2rem;
  }
`;
