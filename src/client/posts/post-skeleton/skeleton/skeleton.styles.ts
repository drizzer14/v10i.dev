import styled, { css, keyframes } from 'styled-components';

const shimmer = keyframes`
  from {
    background-position-x: -2000px;
  }
  to {
    background-position-x: 2000px;
  }
`;

type SkeletonProps = {
  $width: string | undefined;
  $height: string | undefined;
  $lineHeight: string | undefined;
};

export const Skeleton = styled.div<SkeletonProps>(
  ({ $width: width, $height: height, $lineHeight: lineHeight }) => css`
    width: ${width || '100%'};
    height: ${height || 'auto'};

    margin-top: ${lineHeight};
    margin-bottom: ${lineHeight};

    background-image: linear-gradient(
      to right,
      var(--faint-weak),
      var(--transparent),
      var(--faint-weak)
    );
    background-size: 2000px 100%;

    border-radius: 0.5rem;

    cursor: wait;

    animation: ${shimmer} 3s linear infinite;
  `
);
