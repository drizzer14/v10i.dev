import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkUnwrapImages from 'remark-unwrap-images';
import type { Text } from 'react-markdown/lib/ast-to-react';
import { uriTransformer } from 'react-markdown/lib/uri-transformer';
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';

import { Image } from '../image';

import { Pre } from './pre';
import { Code } from './code';
import { Heading } from './heading';
import { Divider } from './divider';
import { List, ListItem } from './list';
import { Blockquote } from './blockquote';
import { makeSlug } from './shared/utils';
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
    // @ts-ignore: Incorrect library typings
    h1: Heading,
    // @ts-ignore: Incorrect library typings
    h2: Heading,
    // @ts-ignore: Incorrect library typings
    h3: Heading,
    // @ts-ignore: Incorrect library typings
    h4: Heading,
    // @ts-ignore: Incorrect library typings
    h5: Heading,
    // @ts-ignore: Incorrect library typings
    a: Anchor,
    // @ts-ignore: Incorrect library typings
    ol: List,
    // @ts-ignore: Incorrect library typings
    ul: List,
    li: ListItem,
    // @ts-ignore: Incorrect library typings
    hr: Divider,
    // @ts-ignore: Incorrect library typings
    blockquote: Blockquote,
    // @ts-ignore: Incorrect library typings
    img: Image,
    // @ts-ignore: Incorrect library typings
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
