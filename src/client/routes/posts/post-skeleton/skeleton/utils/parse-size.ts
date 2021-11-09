import { rng } from 'shared/utils';

import type { SkeletonSize } from '../skeleton.props';

export const parseSize = (
  size: SkeletonSize | undefined
): string | undefined => {
  if (typeof size === 'object') {
    const { min, max, unit } = size;

    return `${rng(min, max)}${unit}`;
  }

  return size;
};
