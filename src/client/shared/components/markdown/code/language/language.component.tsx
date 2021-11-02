import { FC, useMemo } from 'react';

import * as Styled from './language.styles';

type LanguageProps = {
  language: string;
};

export const Language: FC<LanguageProps> = ({ language }) => {
  const formattedLanguage = useMemo(() => {
    switch (language) {
      case 'typescript': {
        return 'TypeScript';
      }
      case 'javascript': {
        return 'JavaScript';
      }
      case 'tsx':
      case 'jsx': {
        return language.toUpperCase();
      }
      default: {
        return language;
      }
    }
  }, [language]);

  return (
    <Styled.Language language={language}>
      <small>{formattedLanguage}</small>
    </Styled.Language>
  );
};
