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

  .keyword {
    color: hsl(334, 40%, 73%);
  }

  .operator,
  .function {
    color: hsl(201, 75%, 69%);
  }

  .punctuation {
    color: hsl(215, 11%, 39%);
  }

  .comment {
    color: hsl(219, 14%, 71%);
    font-style: italic;
  }

  .parameter,
  .key {
    color: hsl(204, 29%, 82%);
  }

  .number,
  .boolean {
    color: hsl(51, 41%, 73%);
  }

  .string {
    color: hsl(97, 31%, 65%);
  }

  .class-name,
  .builtin {
    color: hsl(96, 31%, 65%);
  }

  @media (prefers-color-scheme: light) {
    .keyword {
      color: hsl(334, 40%, 63%);
    }

    .operator,
    .function {
      color: hsl(201, 80%, 49%);
    }

    .punctuation {
      color: hsl(215, 11%, 69%);
    }

    .comment {
      color: hsl(219, 14%, 61%);
    }

    .parameter,
    .key {
      color: hsl(204, 19%, 32%);
    }

    .number,
    .boolean {
      color: hsl(51, 81%, 43%);
    }

    .string {
      color: hsl(97, 31%, 55%);
    }

    .class-name,
    .builtin {
      color: hsl(96, 31%, 55%);
    }
  }
`;
