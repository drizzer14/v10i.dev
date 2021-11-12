import type { SkeletonSize } from '../skeleton.props';

import { parseSize } from './parse-size';

export const parseHeight = (
  height: SkeletonSize | undefined
): string | undefined => {
  switch (height) {
    case 'h1': {
      return '2.074rem';
    }
    case 'h2': {
      return '1.728rem';
    }
    case 'h3': {
      return '1.44rem';
    }
    case 'h4': {
      return '1.2rem';
    }
    case 'h5':
    case 'p': {
      return '1rem';
    }
    case 'small': {
      return 'calc(2 / 3 * 1rem)';
    }
    default: {
      return parseSize(height);
    }
  }
};
