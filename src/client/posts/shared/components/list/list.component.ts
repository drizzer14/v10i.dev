import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;

  &:not(:first-child) {
    margin-top: 4rem;
  }

  & > li {
    &:not(:first-child) {
      margin-top: 2rem;
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
