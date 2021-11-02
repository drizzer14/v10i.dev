import { FC, useMemo } from 'react';

import * as Styled from './skeleton.styles';
import type { SkeletonProps } from './skeleton.props';
import { parseHeight, parseSize, tryMakeLineHeight } from './utils';

export const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => {
  const width = useMemo(() => parseSize(props.width), [props.width]);

  const height = useMemo(() => parseHeight(props.height), [props.height]);

  const lineHeight = useMemo(
    () => tryMakeLineHeight(props.height),
    [props.height]
  );

  return (
    <Styled.Skeleton
      $width={width}
      $height={height}
      $lineHeight={lineHeight}
      className={className}
      role="status"
      aria-busy="true"
      aria-live="polite"
    />
  );
};
