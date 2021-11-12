import { FC, memo, useMemo } from 'react';

import { rng } from 'shared/utils';
import {
  Skeleton,
  DotDivider,
  ImageSkeleton,
} from '@/routes/posts/shared/components';
import type { SkeletonSize } from '@/routes/posts/shared/components/skeleton';

import * as Styled from './post-skeleton.styles';

const makeRandomSkeletonSizes = (min: number, max = min): SkeletonSize[] => {
  return Array.from({ length: rng(min, max) }, (_, index) => ({
    min: 100 - index * rng(10, 30),
    max: 100,
    unit: '%',
  }));
};

const generateSkeletonKey = (seed: SkeletonSize): string => {
  return `${JSON.stringify(seed)}${Math.random().toString(32)}`;
};

export const PostSkeleton: FC = memo(function PostSkeleton() {
  const hasImage = useMemo(() => rng() < 0.5, []);

  const title = useMemo(() => {
    return makeRandomSkeletonSizes(1, 2);
  }, []);

  const description = useMemo(() => {
    return makeRandomSkeletonSizes(3);
  }, []);

  return (
    <Styled.PostSkeleton>
      {hasImage && <ImageSkeleton />}

      {title.map((width) => (
        <Skeleton key={generateSkeletonKey(width)} height="h1" width={width} />
      ))}

      <Styled.MetaSkeleton>
        <Skeleton height="small" width="109px" />

        <DotDivider />

        <Skeleton height="small" width={{ min: 80, max: 85, unit: 'px' }} />
      </Styled.MetaSkeleton>

      <Styled.DescriptionSkeleton>
        {description.map((width) => (
          <Skeleton key={generateSkeletonKey(width)} height="p" width={width} />
        ))}
      </Styled.DescriptionSkeleton>
    </Styled.PostSkeleton>
  );
});
