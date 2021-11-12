import { createGlobalStyle } from 'styled-components';

import { nonMobile } from '@/shared/mixin';

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
    font-size: 2.074rem;
    line-height: 150%;
    letter-spacing: 0.015em;
  }

  h2 {
    font-weight: 500;
    font-size: 1.728rem;
    line-height: 150%;
    letter-spacing: 0.01em;
  }

  h3 {
    font-weight: 600;
    font-size: 1.44rem;
    line-height: 150%;
    letter-spacing: 0.015em;
  }

  h4 {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 175%;
    letter-spacing: 0.02em;
  }

  h5 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 175%;
    letter-spacing: 0.03em;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    transition: font-size 150ms;
  }

  ${nonMobile`
    h1 {
      font-size: 2.488rem;
    }

    h2 {
      font-size: 2.074rem;
    }

    h3 {
      font-size: 1.728rem;
    }

    h4 {
      font-size: 1.44rem;
    }

    h5 {
      font-size: 1.2rem;
    }
  `}

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

    font-size: 0.9em;
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
