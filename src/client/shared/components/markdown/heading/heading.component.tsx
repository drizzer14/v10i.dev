import emojiRegExp from 'emoji-regex';
import { DetailedHTMLProps, forwardRef, HTMLAttributes, useMemo } from 'react';

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
    const [emoji, heading] = useMemo<[string | undefined, string]>(() => {
      const { groups } = children.match(
        new RegExp(`(?<emoji>(?:${emojiRegExp().source})*)\\s?(?<heading>.+)`)
      )!;

      return [groups!.emoji, groups!.heading!];
    }, [children]);

    const id = useMemo(() => {
      return heading
        .replace(/\s/g, '-')
        .replace(/[A-Z]/g, (c) => c.toLowerCase());
    }, [heading]);

    return (
      // @ts-ignore: mistyping of `ref` on `styled-components` part
      <Styled.Heading {...{ id, ref, as: `h${level}`, ...props }}>
        <Styled.Anchor href={`#${id}`}>
          <span>{`${emoji && `${emoji} `}${heading}`}</span>
        </Styled.Anchor>
      </Styled.Heading>
    );
  }
);
