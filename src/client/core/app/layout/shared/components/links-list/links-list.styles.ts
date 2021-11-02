import styled from 'styled-components';

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-self: flex-end;

  & > li {
    &:not(:first-child) {
      margin-left: 1.5rem;
    }
  }
`;
