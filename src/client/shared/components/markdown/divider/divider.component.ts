import styled from 'styled-components';

export const Divider = styled.hr`
  --step: 4px;

  width: 100%;
  height: 1px;

  margin: 2rem auto;

  background: repeating-linear-gradient(
    to right,
    var(--faint-strong-line),
    var(--faint-strong-line) var(--step),
    var(--transparent) var(--step),
    var(--transparent) calc(var(--step) * 2)
  );

  border: 0;
`;
