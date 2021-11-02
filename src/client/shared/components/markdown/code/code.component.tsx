import compose from 'fnts/compose';
import { toHtml } from 'hast-util-to-html';
import { lowlight } from 'lowlight/lib/core';
import { DOMAttributes, FC, useMemo } from 'react';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

import { Copy } from './copy';
import { Language } from './language';
import * as Styled from './code.styles';

lowlight.registerLanguage('javascript', javascript);
lowlight.registerLanguage('typescript', typescript);

type CodeProps = {
  children: string;
  language?: string;
};

export const Code: FC<CodeProps> = ({ children, language }) => {
  const parsedCodeHTML = useMemo<
    DOMAttributes<HTMLPreElement>['dangerouslySetInnerHTML']
  >(
    () => ({
      __html: compose(
        toHtml,
        language
          ? (string: string) => lowlight.highlight(language, string)
          : lowlight.highlightAuto
      )(children.replace(/\n$/, '')),
    }),
    [children, language]
  );

  return (
    <>
      {language && <Language language={language} />}

      <Copy content={children} />

      <Styled.Code dangerouslySetInnerHTML={parsedCodeHTML} />
    </>
  );
};
