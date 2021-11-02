import type { FC } from 'react';

import { lazyLoad, matchDevice, matchRuntime } from '@/shared/utils';

import { LinksList } from '../shared/components';

import { Copyright } from './copyright';
import * as Styled from './footer.styles';

const LinksListClient = lazyLoad(
  'LinksList',
  () => import('../shared/components/links-list'),
  {
    ssr: false,
  }
);

export const Footer: FC = () => {
  return (
    <Styled.Footer>
      {matchRuntime({
        client: () => (
          <LinksListClient
            areLinksInteractive={matchDevice({
              desktop: () => true,
              nonDesktop: () => false,
            })}
            areTitlesDefaultShown={matchDevice({
              desktop: () => false,
              nonDesktop: () => true,
            })}
          />
        ),
        server: () => (
          <LinksList areLinksInteractive={false} areTitlesDefaultShown />
        ),
      })}

      <Copyright />
    </Styled.Footer>
  );
};
