import styled, { css } from 'styled-components';

import { ListItem } from './list-item';

type ListProps = {
  depth: number;
  ordered: boolean;
};

export const List = styled.ul.attrs<ListProps>(({ ordered }) => ({
  as: ordered ? 'ol' : 'ul',
}))<ListProps>(
  ({ ordered }) => css`
    --list-indent: 2rem;
    --list-item-indent: 0.5rem;

    margin-top: var(--list-indent);
    margin-bottom: var(--list-indent);
    margin-left: 1rem;

    ${(ordered
      ? () => css`
          counter-reset: li;

          ${ListItem} {
            counter-increment: li;

            &:before {
              content: counter(li);

              top: 0;
            }

            &:after {
              position: absolute;
              right: calc(100% + 0.5rem - 5px);
              top: 0;

              content: '.';
            }
          }
        `
      : () => css`
          ${ListItem} {
            &:before {
              content: '–';

              top: -2px;
            }
          }
        `)()}

    ${ListItem} {
      & > ol,
      & > ul {
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
