import styled from 'styled-components';

import { nonMobileWithGap } from '@/shared/mixin';

export const Divider = styled.hr`
  position: relative;
  left: -2rem;

  width: calc(100% + 4rem);
  height: 1px;

  margin: 2rem auto;

  background-color: var(--faint-strong-line);

  border: 0;

  ${nonMobileWithGap`
    position: static;

    width: 100%;
  `}
`;
