import styled from 'styled-components';

export const Image = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 1rem;

  & > img {
    object-fit: cover;

    border-radius: 0.5rem;
  }
`;

export const Caption = styled.figcaption`
  margin-top: 0.5rem;

  color: var(--faint-strong-text);

  text-align: center;
`;
