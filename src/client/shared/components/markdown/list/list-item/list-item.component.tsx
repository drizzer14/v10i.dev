import { ReactNode, useMemo } from 'react';
import type { LiComponent } from 'react-markdown/lib/ast-to-react';

import * as Styled from './list-item.styles';

export const ListItem: LiComponent = ({ children }) => {
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
