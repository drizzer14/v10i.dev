import styled from 'styled-components';
import type { NormalComponents } from 'react-markdown/lib/complex-types';

import { nonMobile, mobileWidth } from '@/shared/mixin';

export const Pre = styled.pre`
  position: relative;

  display: flex;
  flex-direction: column;

  max-width: 100vw;

  margin: 2rem -2rem;

  ${nonMobile`
    max-width: calc(${mobileWidth}px + 4rem);
  `}
` as NormalComponents['pre'];
