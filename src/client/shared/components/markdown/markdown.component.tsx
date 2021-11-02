import type { FC } from 'react';
// @ts-ignore: No declaration file for this file present
import ReactMarkdown from 'react-markdown';

import { markdownConfig } from './markdown.config';

type MarkdownProps = {
  children: string;
};

export const Markdown: FC<MarkdownProps> = ({ children }) => {
  return <ReactMarkdown {...markdownConfig}>{children}</ReactMarkdown>;
};
