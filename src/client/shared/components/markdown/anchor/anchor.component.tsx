import {
  AnchorHTMLAttributes,
  forwardRef,
  useMemo,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import type { ReactMarkdownProps } from 'react-markdown/lib/complex-types';

import { lazyLoad } from '@/shared/utils';
import { useIsomorphicLayoutEffect, useToggle } from '@/shared/hooks';

import * as Styled from './anchor.styles';

const Favicon = lazyLoad('Favicon', () => import('./favicon'), {
  ssr: false,
});

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  ReactMarkdownProps & {
    href: string;
  };

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  function Anchor({ node: _, children, href, ...props }, ref) {
    const isHrefRelative = href.startsWith('/');

    const faviconSrc = useMemo(() => {
      return isHrefRelative
        ? '/icon.svg'
        : `${href.match(/(https?:\/\/[^/]+)\/?/)?.[0]}/favicon.ico`;
    }, [href, isHrefRelative]);

    const [hasFavicon, toggleFaviconRender] = useToggle(true);

    const [faviconHeight, setFaviconHeight] = useState(0);

    const childrenRef = useRef<HTMLSpanElement>(null);

    useIsomorphicLayoutEffect(() => {
      // eslint-disable-next-line functional/no-conditional-statement
      if (childrenRef.current) {
        setFaviconHeight(childrenRef.current.getBoundingClientRect().height);
      }
    }, []);

    return (
      <Link href={href} passHref>
        {/* eslint-disable-next-line react/jsx-newline */}
        <Styled.Anchor ref={ref} {...props}>
          {hasFavicon && (
            <Favicon
              src={faviconSrc}
              height={faviconHeight / 2}
              onError={() => {
                toggleFaviconRender(false);
              }}
            />
          )}

          <span ref={childrenRef}>{children}</span>
        </Styled.Anchor>
      </Link>
    );
  }
);
