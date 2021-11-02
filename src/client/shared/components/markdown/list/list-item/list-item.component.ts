import styled from 'styled-components';

export const ListItem = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &::before {
    position: absolute;
    right: calc(100% + 0.5rem);

    display: inline-block;

    width: 1rem;

    direction: rtl;
    text-align: right;
  }
`;
