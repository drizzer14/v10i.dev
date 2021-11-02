import { css, FlattenSimpleInterpolation } from 'styled-components';

export const size = (amount: string): FlattenSimpleInterpolation => css`
  width: ${amount};
  height: ${amount};
`;
