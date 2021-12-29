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
  .function,
  .hvariable {
    color: hsl(201, 75%, 69%);
  }

  .punctuation,
  .comment {
    color: hsl(215, 11%, 39%);
  }

  .comment {
    font-style: italic;
  }

  .parameter,
  .key {
    color: hsl(204, 29%, 82%);
  }

  .number,
  .boolean,
  .constant {
    color: hsl(51, 41%, 73%);
  }

  .string,
  .builtin,
  .class-name {
    color: hsl(97, 31%, 65%);
  }

  @media (prefers-color-scheme: light) {
    .keyword {
      color: hsl(334, 50%, 63%);
    }

    .operator,
    .function,
    .hvariable {
      color: hsl(201, 80%, 49%);
    }

    .punctuation,
    .comment {
      color: hsl(215, 11%, 69%);
    }

    .parameter,
    .key {
      color: hsl(204, 19%, 32%);
    }

    .number,
    .boolean,
    .constant {
      color: hsl(51, 81%, 43%);
    }

    .string,
    .builtin,
    .class-name {
      color: hsl(97, 41%, 55%);
    }
  }
`;
