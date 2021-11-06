import styled from 'styled-components';

export const Figure = styled.figure`
  --border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1rem 0;
`;

export const Image = styled.img`
  object-fit: contain;

  border-radius: var(--border-radius);
`;

export const Caption = styled.figcaption`
  margin-top: 0.25rem;

  color: var(--faint-strong-text);

  text-align: center;
`;
