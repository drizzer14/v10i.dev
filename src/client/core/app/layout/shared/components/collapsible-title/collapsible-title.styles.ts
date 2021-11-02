import styled from 'styled-components';

export const CollapsibleTitle = styled.span`
  overflow: hidden;

  transition: width 150ms;

  will-change: width;

  & > small {
    display: inline-block;

    white-space: nowrap;

    overflow: hidden;

    line-height: 1;
  }
`;
