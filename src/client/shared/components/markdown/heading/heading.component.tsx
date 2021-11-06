import { DetailedHTMLProps, forwardRef, HTMLAttributes, useMemo } from 'react';

import * as Styled from './heading.styles';

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  level: number;
  node: {
    children: [
      {
        value: string;
      }
    ];
  };
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ children, level, node, ...props }, ref) {
    const id = useMemo(() => {
      return node.children[0].value
        .replace(/\s/g, '-')
        .replace(/[A-Z]/g, (c) => c.toLowerCase());
    }, [node]);

    return (
      // @ts-ignore: mistyping of `ref` on `styled-components` part
      <Styled.Heading {...{ id, ref, as: `h${level + 1}`, ...props }}>
        <Styled.Anchor href={`#${id}`}>
          <span>{children}</span>
        </Styled.Anchor>
      </Styled.Heading>
    );
  }
);
