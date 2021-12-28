import {
  createGlobalStyle,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { fontsConfig } from './fonts.config';

const { baseFontFamily, codeFontFamily } = fontsConfig;

const makeFamilyFontFaces = (
  fontFamily: string,
  fontNames: string[]
): FlattenSimpleInterpolation => css`
  ${fontNames.map((fontName) => {
    const isItalic = /Italic/.test(fontName);

    return css`
      @font-face {
        font-weight: ${{
          Light: 300,
          Regular: 400,
          Medium: 500,
          SemiBold: 600,
          Bold: 700,
        }[isItalic ? fontName.slice(0, -6) : fontName]};
        font-family: ${fontFamily};
        font-style: ${isItalic ? 'italic' : 'normal'};
        font-display: fallback;
        src: ${`url('/assets/fonts/${fontFamily}/${fontFamily}-${fontName}.ttf') format('truetype')`};
      }
    `;
  })};
`;

export const Fonts = createGlobalStyle`
  :root {
    --font-base: ${baseFontFamily}, sans-serif;
    --font-code: ${codeFontFamily}, monospace;
  }

  ${makeFamilyFontFaces(codeFontFamily, [
    'Light',
    'Regular',
    'Medium',
    'SemiBold',
    'Bold',
  ])}

  ${makeFamilyFontFaces(baseFontFamily, [
    'Light',
    'LightItalic',
    'Medium',
    'MediumItalic',
    'SemiBold',
    'SemiBoldItalic',
    'Bold',
    'BoldItalic',
  ])}
`;
