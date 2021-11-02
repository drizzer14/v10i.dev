import styled from 'styled-components';

export const ProgressBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100%;
  height: 6px;
`;

export const ProgressValue = styled.div`
  height: 100%;

  background-color: var(--base-strong);

  transition: width 150ms;

  &[data-rounded='true'] {
    border-bottom-right-radius: 6px;
  }
`;
