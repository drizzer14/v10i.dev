import styled from 'styled-components';

import { nonMobile, nonMobileWithGap } from '@/shared/mixin';

import { Skeleton } from './skeleton';

export const PostSkeleton = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 0 2rem;

  ${nonMobileWithGap`
    padding: 0;
  `}
`;

export const ImageSkeleton = styled(Skeleton)`
  position: relative;
  left: -2rem;

  width: calc(100% + 4rem);
  height: 300px;

  margin-bottom: 1rem;

  overflow: hidden;

  ${nonMobileWithGap`
    position: initial;

    width: 100%;
  `}

  ${nonMobile`
    border-radius: 0.5rem;
  `}
`;

export const DescriptionSkeleton = styled.div`
  margin-top: 1rem;
`;

export const MetaSkeleton = styled.div`
  display: flex;
  align-items: center;

  color: var(--faint-weak);
`;
