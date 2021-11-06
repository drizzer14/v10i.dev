import Link from 'next/link';
import { AnchorHTMLAttributes, forwardRef } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/complex-types';

import * as Styled from './anchor.styles';

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  ReactMarkdownProps & {
    href: string;
  };

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
  function Anchor({ node: _, children, href, ...props }, ref) {
    return (
      <Link href={href} passHref prefetch={href.startsWith('/')}>
        {/* eslint-disable-next-line react/jsx-newline */}
        <Styled.Anchor ref={ref} {...props}>
          {children}
        </Styled.Anchor>
      </Link>
    );
  }
);
