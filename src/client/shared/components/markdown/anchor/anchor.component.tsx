import Link from 'next/link';
import { AnchorHTMLAttributes, forwardRef, useMemo } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/complex-types';

import { appConfig } from 'shared/config';

import * as Styled from './anchor.styles';

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  ReactMarkdownProps & {
    href: string;
  };

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  function Anchor({ node: _, children, href, ...props }, ref) {
    const isRelativeAnchor = useMemo(() => {
      return (
        href.startsWith('#') ||
        (href.startsWith(appConfig.baseURL) && href.includes('#'))
      );
    }, [href]);

    return (
      <Link href={href} passHref>
        {/* eslint-disable-next-line react/jsx-newline */}
        <Styled.Anchor
          ref={ref}
          target={isRelativeAnchor ? undefined : '_blank'}
          rel={isRelativeAnchor ? undefined : 'noreferrer'}
          {...props}
        >
          {children}
        </Styled.Anchor>
      </Link>
    );
  }
);
