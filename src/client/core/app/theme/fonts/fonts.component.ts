import { createGlobalStyle } from 'styled-components';

import { trimInside } from 'shared/utils';

import { fontsConfig } from './fonts.config';

const { baseFontFamily, codeFontFamily } = fontsConfig;

const makeFontSrc = (fontName: string, weight = ''): string => {
  const trimmedFontName = trimInside(fontName);

  return `url('/fonts/${trimmedFontName}/${trimmedFontName}${
    weight && `-${weight}`
  }.ttf') format('truetype')`;
};

export const Fonts = createGlobalStyle`
  :root {
    --font-base: ${baseFontFamily}, sans-serif;
    --font-code: ${codeFontFamily}, monospace;
  }

  @font-face {
    font-weight: 300;
    font-family: ${codeFontFamily};
    font-style: normal;
    src: ${makeFontSrc(codeFontFamily, 'Light')};
  }
  
  @font-face {
    font-weight: 400;
    font-family: ${codeFontFamily};
    font-style: normal;
    src: ${makeFontSrc(codeFontFamily, 'Regular')};
  }

  @font-face {
    font-weight: 400;
    font-family: ${baseFontFamily};
    font-style: normal;
    src: ${makeFontSrc(baseFontFamily, 'Light')};
  }

  @font-face {
    font-weight: 400;
    font-family: ${baseFontFamily};
    font-style: italic;
    src: ${makeFontSrc(baseFontFamily, 'LightItalic')};
  }

  @font-face {
    font-weight: 500;
    font-family: ${baseFontFamily};
    font-style: normal;
    src: ${makeFontSrc(baseFontFamily, 'Medium')};
  }

  @font-face {
    font-weight: 500;
    font-family: ${baseFontFamily};
    font-style: italic;
    src: ${makeFontSrc(baseFontFamily, 'MediumItalic')};
  }

  @font-face {
    font-weight: 700;
    font-family: ${baseFontFamily};
    font-style: normal;
    src: ${makeFontSrc(baseFontFamily, 'Bold')};
  }

  @font-face {
    font-weight: 700;
    font-family: ${baseFontFamily};
    font-style: italic;
    src: ${makeFontSrc(baseFontFamily, 'BoldItalic')};
  }
`;
