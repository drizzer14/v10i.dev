import type { FC } from 'react';

import { LinksList } from '@/shared/components';
import { lazyLoad, matchDevice, matchRuntime } from '@/shared/utils';

import { linksConfig } from '../shared/config';

import { Copyright } from './copyright';
import * as Styled from './footer.styles';

const LinksListClient = lazyLoad(
  'LinksList',
  () => import('../../../../shared/components/links-list'),
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
            links={linksConfig}
            areLinksInteractive={matchDevice({
              nonDesktop: () => false,
            })}
            areTitlesDefaultShown={matchDevice({
              nonDesktop: () => true,
            })}
          />
        ),
        server: () => (
          <LinksList
            links={linksConfig}
            areLinksInteractive={false}
            areTitlesDefaultShown
          />
        ),
      })}

      <Copyright />
    </Styled.Footer>
  );
};
