import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';

import { Image } from '../image';

import { Pre } from './pre';
import { Code } from './code';
import { Anchor } from './anchor';
import { Heading } from './heading';
import { Divider } from './divider';
import { List, ListItem } from './list';
import { Blockquote } from './blockquote';

export const markdownConfig: Omit<ReactMarkdownOptions, 'children'> = {
  plugins: [remarkGfm, remarkUnwrapImages],
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
    ol: List,
    ul: List,
    li: ({ children, ...props }) => (
      // @ts-ignore: Incorrect library typings
      <ListItem {...props}>
        <p>{children}</p>
      </ListItem>
    ),
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
