import type { SkeletonSize } from '../skeleton.props';

import { parseHeight } from './parse-height';

export const tryMakeLineHeight = (
  height: SkeletonSize | undefined
): string | undefined => {
  const calculate = (lineHeight: number): string =>
    `calc((${parseHeight(height)} * ${lineHeight}) / 2)`;

  switch (height) {
    case 'h1':
    case 'h2': {
      return calculate(0.25);
    }
    case 'h3':
    case 'h4':
    case 'p':
    case 'small': {
      return calculate(0.375);
    }
    default: {
      return undefined;
    }
  }
};
