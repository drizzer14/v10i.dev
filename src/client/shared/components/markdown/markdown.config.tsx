import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import type {
  Text,
  OrderedListComponent,
  UnorderedListComponent,
} from 'react-markdown/lib/ast-to-react';
import remarkUnwrapImages from 'remark-unwrap-images';
import { uriTransformer } from 'react-markdown/lib/uri-transformer';
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';

import { Image } from '../image';

import { Pre } from './pre';
import { Code } from './code';
import { Heading } from './heading';
import { Divider } from './divider';
import { List, ListItem } from './list';
import { makeSlug } from './shared/utils';
import { Blockquote } from './blockquote';
import { Anchor } from './shared/components';

export const markdownConfig: Omit<ReactMarkdownOptions, 'children'> = {
  remarkPlugins: [remarkGfm, remarkUnwrapImages, [remarkToc, { maxDepth: 3 }]],
  transformLinkUri: (href, children) => {
    if (href.startsWith('#')) {
      return `#${makeSlug((children[0] as Text).value)}`;
    }

    return uriTransformer(href);
  },
  linkTarget: (href) => {
    return href.startsWith('#') ? undefined : '_blank';
  },
  components: {
    h1: Heading,
    h2: Heading,
    h3: Heading,
    h4: Heading,
    h5: Heading,
    // @ts-ignore: incompatible library types
    a: Anchor,
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
