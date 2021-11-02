import { FC, useState } from 'react';
import { foldMap } from 'fnts/maybe/operators';

import { orUndefined } from 'shared/utils';
import { useTimeout } from '@/shared/hooks';
import { maybeNavigator } from '@/shared/entity';

import { Icon } from '../../../icon';

import * as Styled from './copy.styles';

type CopyProps = {
  content: string;
};

export const Copy: FC<CopyProps> = ({ content }) => {
  const [hasCopied, setCopied] = useState(false);

  const resetTimeout = useTimeout(() => setCopied(false), 2000);

  const copyToClipboard = (): void => {
    foldMap(maybeNavigator, (navigator) => {
      navigator.clipboard
        ?.writeText(
          `\`\`\`
${content}\`\`\``
        )
        .then(() => setCopied(true))
        .finally(resetTimeout.set);
    });
  };

  return (
    <Styled.Copy
      title="Copy"
      onClick={copyToClipboard}
      data-copied={orUndefined(hasCopied)}
    >
      <Icon name={hasCopied ? 'check' : 'copy'} />
    </Styled.Copy>
  );
};
