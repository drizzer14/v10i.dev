import dayjs from 'dayjs';
import type { FC } from 'react';

import packageJSON from '../../../../../../../package.json';

import * as Styled from './copyright.styles';

export const Copyright: FC = () => {
  return (
    <Styled.Copyright>
      {`© ${dayjs().year()}, `}

      <Styled.AuthorLink
        href={packageJSON.author.url}
        target="_blank"
        rel="noreferrer"
      >
        {packageJSON.author.name}
      </Styled.AuthorLink>

      {` ❤️`}
    </Styled.Copyright>
  );
};
