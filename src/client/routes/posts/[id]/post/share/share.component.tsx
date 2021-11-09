import type { FC } from 'react';
import { foldMap } from 'fnts/maybe/operators';

import { Icon } from '@/shared/components';
import { tryVibrate } from '@/shared/utils';
import { maybeNavigator } from '@/shared/entity';

import * as Styled from './share.styles';

type ShareProps = {
  title: string;
  text: string;
  url: string;
};

const tryShare = (data: ShareProps): void => {
  foldMap(maybeNavigator, (navigator) =>
    // empty `catch` prevents uncaught runtime error when sharing gets cancelled
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    navigator.share?.(data).catch(() => {})
  );
};

export const Share: FC<ShareProps> = (props) => {
  return (
    <Styled.Share
      onClick={() => {
        tryVibrate();

        tryShare(props);
      }}
    >
      <Icon name="share" />

      <small>Share</small>
    </Styled.Share>
  );
};
