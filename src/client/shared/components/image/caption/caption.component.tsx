import type { FC } from 'react';

import { Markdown } from '../../markdown/markdown.component';
import { MarkdownConfig, markdownConfig } from '../../markdown/markdown.config';

import * as Styled from './caption.styles';

const captionMarkdownConfig: MarkdownConfig = {
  ...markdownConfig,
  components: {
    ...markdownConfig.components,
    p: ({ children }) => <small>{children}</small>,
  },
};

type CaptionProps = {
  children: string;
};

export const Caption: FC<CaptionProps> = ({ children }) => {
  return (
    <Styled.Caption>
      <Markdown {...captionMarkdownConfig}>{children}</Markdown>
    </Styled.Caption>
  );
};
