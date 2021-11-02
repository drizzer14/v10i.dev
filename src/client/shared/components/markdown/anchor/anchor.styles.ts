import styled from 'styled-components';

export const Anchor = styled.a`
  display: inline-flex;
  align-items: baseline;

  cursor: pointer;

  &:hover,
  &:focus {
    img {
      opacity: 0.75;
    }
  }
`;
