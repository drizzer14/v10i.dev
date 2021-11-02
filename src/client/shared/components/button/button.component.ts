import styled from 'styled-components';

export const Button = styled.button`
  --color: var(--color);
  --interaction-color: var(--interaction-color);

  --background-color: var(--faint-weak-background);
  --interaction-background-color: var(--faint-strong-background);

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color);

  line-height: 1;

  background-color: var(--background-color);

  transition: 150ms;

  &:hover,
  &:focus {
    color: var(--interaction-color);

    background-color: var(--interaction-background-color);
  }

  &:active {
    transform: scale(0.96);
  }
`;
