import type { FC } from 'react';

import { lazyLoad, matchDevice, matchRuntime } from '@/shared/utils';

import { LinksList } from '../shared/components';

import { Title } from './title';
import * as Styled from './header.styles';

const TitleClient = lazyLoad('Title', () => import('./title'), {
  ssr: false,
});

const LinksListClient = lazyLoad(
  'LinksList',
  () => import('../shared/components/links-list'),
  {
    ssr: false,
  }
);

export const Header: FC = () => {
  return (
    <Styled.Header>
      {matchRuntime({
        client: () => <TitleClient />,
        server: () => <Title />,
      })}

      {matchRuntime({
        client: () => (
          <LinksListClient
            areLinksInteractive={matchDevice({
              desktop: () => true,
              nonDesktop: () => false,
            })}
            areTitlesDefaultShown={false}
          />
        ),
        server: () => (
          <LinksList
            areLinksInteractive={false}
            areTitlesDefaultShown={false}
          />
        ),
      })}
    </Styled.Header>
  );
};
