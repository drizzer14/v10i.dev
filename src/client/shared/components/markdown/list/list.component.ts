import styled, { css } from 'styled-components';

type ListProps = {
  depth: number;
  ordered: boolean;
};

export const List = styled.ul.attrs<ListProps>(({ ordered }) => ({
  as: ordered ? 'ol' : 'ul',
}))<ListProps>(
  ({ ordered }) => css`
    --list-indent: 1rem;
    --list-item-indent: 0.5rem;

    margin-top: var(--list-indent);
    margin-bottom: var(--list-indent);

    ${(ordered
      ? () => css`
          margin-left: 1.25rem;

          & > li {
            list-style-type: decimal;
          }
        `
      : () => css`
          margin-left: 1rem;

          & > li {
            list-style-type: disc;
          }
        `)()}

    & > li {
      & > p > ol,
      & > p > ul {
        margin-top: var(--list-item-indent);
        margin-bottom: 0;
      }

      &:not(:first-child) {
        margin-top: var(--list-item-indent);
      }

      &:not(:last-child) {
        margin-bottom: var(--list-item-indent);
      }
    }
  `
);
