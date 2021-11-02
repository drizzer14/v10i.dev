import styled from 'styled-components';

import { nonMobile } from '@/shared/mixin';

export const Code = styled.code`
  padding: 1.5rem 5rem 1.5rem 2rem;

  overflow-x: scroll;

  color: var(--faint-strong-text);

  background-color: var(--faint-weak-background);

  -ms-overflow-style: none;
  scrollbar-width: none;

  ${nonMobile`
    border-radius: 0 1rem 1rem 1rem;
  `}

  &::-webkit-scrollbar {
    display: none;
  }

  .hljs- {
    &comment {
      color: var(--faint-strong-down);

      font-style: italic;
    }

    &punctuation {
      color: var(--faint-strong-down);
    }

    &function {
      color: var(--base-strong-down);
    }

    &title,
    &keyword {
      color: var(--base-strong-up);
    }

    &operator {
      color: var(--faint-strong);
    }

    &attr,
    &class,
    &params,
    &built_in {
      color: var(--accent-strong-up);
    }

    &string {
      color: hsl(calc(var(--hue) - 80), 65%, 30%);
    }

    &number {
      color: hsl(calc(var(--hue) + 100), 32%, 45%);
    }

    @media (prefers-color-scheme: dark) {
      &string {
        color: hsl(calc(var(--hue) - 80), 40%, 45%);
      }

      &number {
        color: hsl(calc(var(--hue) + 100), 35%, 55%);
      }
    }
  }
`;
