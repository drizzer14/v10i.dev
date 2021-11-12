import Link from 'next/link';
import compose from 'fnts/compose';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import type {
  OrderedListComponent,
  UnorderedListComponent,
} from 'react-markdown/lib/ast-to-react';
import { toString } from 'mdast-util-to-string';
import remarkUnwrapImages from 'remark-unwrap-images';
import { uriTransformer } from 'react-markdown/lib/uri-transformer';
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';

import { orUndefined } from 'shared/utils';

import { Image } from '../image';

import { Pre } from './pre';
import { Code } from './code';
import { Heading } from './heading';
import { Divider } from './divider';
import { List, ListItem } from './list';
import { makeSlug } from './shared/utils';
import { Blockquote } from './blockquote';
import { Anchor } from './shared/components';
import type { AnchorProps } from './shared/components/anchor';

export type MarkdownConfig = Omit<ReactMarkdownOptions, 'children'>;

export const markdownConfig: MarkdownConfig = {
  remarkPlugins: [remarkGfm, remarkUnwrapImages, [remarkToc, { maxDepth: 3 }]],
  transformLinkUri: (href, children) => {
    if (href.startsWith('#')) {
      return `#${compose(makeSlug, toString)(children)}`;
    }

    return uriTransformer(href);
  },
  linkTarget: (href) => {
    return orUndefined(!href.startsWith('#') && '_blank');
  },
  components: {
    h1: Heading,
    h2: Heading,
    h3: Heading,
    h4: Heading,
    h5: Heading,
    a: ({ href, ...props }) =>
      href?.startsWith('/') ? (
        <Link href={href} passHref>
          <Anchor {...(props as AnchorProps)} />
        </Link>
      ) : (
        <Anchor href={href} {...(props as AnchorProps)} />
      ),
    ol: List as OrderedListComponent,
    ul: List as UnorderedListComponent,
    li: ListItem,
    hr: Divider,
    blockquote: Blockquote,
    // @ts-ignore: incompatible library types
    img: Image,
    pre: Pre,
    code: ({ children, inline, className }) => {
      const [, language] = /language-(\w+)/.exec(className || '') || [];

      return !inline ? (
        <Code language={language}>{String(children)}</Code>
      ) : (
        <code>{children}</code>
      );
    },
  },
};
