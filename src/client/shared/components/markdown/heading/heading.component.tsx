import { useMemo } from 'react';
import type { HeadingComponent } from 'react-markdown/lib/ast-to-react';

import { makeSlug } from '../shared/utils';

import * as Styled from './heading.styles';

export const Heading: HeadingComponent = ({
  children: [children],
  level,
  ...props
}) => {
  const id = useMemo(() => makeSlug(children as string), [children]);

  return (
    // @ts-ignore: mistyping of `children` type
    <Styled.Heading {...{ id, as: `h${level}`, ...props }}>
      <Styled.Anchor href={`#${id}`}>
        <span>{children}</span>
      </Styled.Anchor>
    </Styled.Heading>
  );
};
