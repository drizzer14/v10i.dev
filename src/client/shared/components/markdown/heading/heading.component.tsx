import { useMemo } from 'react';
import { toString } from 'mdast-util-to-string';
import type { HeadingComponent } from 'react-markdown/lib/ast-to-react';

import { makeSlug } from '../shared/utils';

import * as Styled from './heading.styles';

export const Heading: HeadingComponent = ({
  children,
  node,
  level,
  ...props
}) => {
  const id = useMemo(() => makeSlug(toString(node)), [node]);

  return (
    // @ts-ignore: mistyping of `children` type
    <Styled.Heading {...{ id, as: `h${level}`, ...props }}>
      <Styled.Anchor href={`#${id}`}>
        <span>{children}</span>
      </Styled.Anchor>
    </Styled.Heading>
  );
};
