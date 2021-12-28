import styled from 'styled-components';
import type { NormalComponents } from 'react-markdown/lib/complex-types';

export const Blockquote = styled.blockquote`
  position: relative;

  margin: 2rem 0;
  padding: 0.5rem 0 0.5rem 0.75rem;

  overflow: hidden;

  color: var(--faint-strong-text);

  border-left: 0.5rem solid var(--faint-strong-background);
  border-radius: 0.25rem;

  & > *:last-child {
    margin-bottom: 0;
  }
` as NormalComponents['blockquote'];
