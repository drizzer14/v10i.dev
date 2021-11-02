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
