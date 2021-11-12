import styled from 'styled-components';

export const Figure = styled.figure`
  --border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  margin: 1rem 0;
`;

export const Image = styled.img`
  object-fit: contain;

  border-radius: var(--border-radius);
`;
