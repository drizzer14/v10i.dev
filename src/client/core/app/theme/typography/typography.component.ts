import { createGlobalStyle } from 'styled-components';

import { typographyConfig } from './typography.config';

export const Typography = createGlobalStyle`
  html {
    font-size: ${typographyConfig.fontSize}px;
  }

  body {
    font-weight: 300;
    font-size: 1rem;
    font-family: var(--font-base);
    line-height: 175%;
    letter-spacing: 0.01em;
  }
  
  h1 {
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 150%;
    letter-spacing: 0.015em;
  }

  h2 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 150%;
    letter-spacing: 0.01em;
  }

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 175%;
    letter-spacing: 0.015em;
  }

  h4 {
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 175%;
    letter-spacing: 0.04em;
  }

  h5 {
    font-weight: 700;
    font-size: 1.1rem;
    font-variant: all-small-caps;
    line-height: 175%;
    letter-spacing: 0.075em;
  }

  small {
    font-size: calc(2 / 3 * 1rem);
    line-height: 175%;
    letter-spacing: 0.03em;
  }

  pre,
  code {
    font-weight: 300;
    font-family: var(--font-code);
  }

  pre {
    &,
    & > code {
      font-weight: 300;
      font-size: 0.8rem;
      line-height: 175%;
    }
  }

  code {
    display: inline-block;

    padding: 4px 6px;

    font-size: 0.9rem;
    line-height: 1;

    border-radius: 3px;
  }

  i,
  em {
    font-style: italic;
  }

  b,
  strong {
    font-weight: 500;
  }

  s,
  del {
    text-decoration: line-through;
  }
`;
