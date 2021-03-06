import type { FC } from 'react';
// @ts-ignore: No declaration file for this file present
import ReactMarkdown from 'react-markdown';

import { MarkdownConfig } from './markdown.config';

type MarkdownProps = MarkdownConfig & {
  children: string;
};

export const Markdown: FC<MarkdownProps> = ({ children, ...config }) => {
  return <ReactMarkdown {...config}>{children}</ReactMarkdown>;
};
