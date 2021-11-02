import Link from 'next/link';
import type { FC } from 'react';

import { matchDevice, tryVibrate } from '@/shared/utils';

import { useCollapsibleTitle } from '../../shared/hooks';
import { CollapsibleTitle } from '../../shared/components';

import * as Styled from './title.styles';

export const Title: FC = () => {
  const { ref, width, handlers } = useCollapsibleTitle();

  return (
    <Link href="/" passHref>
      <Styled.Title
        title="v10i.dev"
        // eslint-disable-next-line functional/prefer-tacit
        onClick={() => tryVibrate()}
        {...matchDevice({
          desktop: () => handlers,
          nonDesktop: () => ({}),
        })}
      >
        <Styled.Logo />

        <CollapsibleTitle
          {...matchDevice({
            desktop: () => ({ ref, width }),
            nonDesktop: () => ({}),
          })}
        >
          .dev
        </CollapsibleTitle>
      </Styled.Title>
    </Link>
  );
};
