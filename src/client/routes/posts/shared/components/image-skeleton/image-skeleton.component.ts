import styled from 'styled-components';

import { nonMobile, nonMobileWithGap } from '@/shared/mixin';

import { Skeleton } from '../skeleton';

export const ImageSkeleton = styled(Skeleton)`
  position: relative;
  left: -2rem;

  width: 100vw;
  height: 50vw;

  margin-bottom: 1rem;

  overflow: hidden;

  ${nonMobile`
    position: static;

    width: 608px;
    height: 304px;
  
    border-radius: 0.5rem;
  `}

  ${nonMobileWithGap`
    width: 680px;
    height: 340px;
  `}
`;
