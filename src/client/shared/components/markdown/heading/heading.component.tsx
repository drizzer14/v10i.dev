import { DetailedHTMLProps, forwardRef, HTMLAttributes, useMemo } from 'react';

import { makeSlug } from '../shared/utils';

import * as Styled from './heading.styles';

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  level: number;
  children: [string];
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ children: [children], level, ...props }, ref) {
    const id = useMemo(() => makeSlug(children), [children]);

    return (
      // @ts-ignore: mistyping of `ref` on `styled-components` part
      <Styled.Heading {...{ id, ref, as: `h${level}`, ...props }}>
        <Styled.Anchor href={`#${id}`}>
          <span>{children}</span>
        </Styled.Anchor>
      </Styled.Heading>
    );
  }
);
