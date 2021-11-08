import { FC, ReactNode, useMemo } from 'react';

import * as Styled from './list-item.styles';

export const ListItem: FC = ({ children }) => {
  const parsedChildren = useMemo<ReactNode>(() => {
    const normalizedChildren = Array.isArray(children)
      ? children.filter((child) => child !== '\n')
      : [children];

    return normalizedChildren.length > 1 ? (
      <span>{normalizedChildren}</span>
    ) : (
      normalizedChildren[0]
    );
  }, [children]);

  return <Styled.ListItem>{parsedChildren}</Styled.ListItem>;
};
