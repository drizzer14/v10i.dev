import { highlight, languages } from 'prismjs';
import { DOMAttributes, FC, useMemo } from 'react';

import { Copy } from './copy';
import { Language } from './language';
import * as Styled from './code.styles';

type CodeProps = {
  children: string;
  language: string;
};

export const Code: FC<CodeProps> = ({ children, language }) => {
  const parsedCodeHTML = useMemo<
    DOMAttributes<HTMLPreElement>['dangerouslySetInnerHTML']
  >(
    () => ({
      __html: highlight(
        children.replace(/\n$/, ''),
        languages[language]!,
        language
      ),
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
