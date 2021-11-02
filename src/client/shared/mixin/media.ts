import { css } from 'styled-components';

import { remToPx } from './converters';
import { Mixin, mixin } from './mixin';

export const mobileWidth = 600;

export const mobileWidthWithGap = mobileWidth + remToPx(4);

export const minWidth = (width: number): Mixin => {
  return mixin(
    (styles) => css`
      @media screen and (min-width: ${width}px) {
        ${styles};
      }
    `
  );
};

export const nonMobile = minWidth(mobileWidth);

export const nonMobileWithGap = minWidth(mobileWidthWithGap);
