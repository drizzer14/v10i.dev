import type { FC } from 'react';

import { LinksList } from '@/shared/components';
import { lazyLoad, matchDevice, matchRuntime } from '@/shared/utils';

import { linksConfig } from '../shared/config';

import { Title } from './title';
import * as Styled from './header.styles';

const TitleClient = lazyLoad('Title', () => import('./title'), {
  ssr: false,
});

const LinksListClient = lazyLoad(
  'LinksList',
  () => import('../../../../shared/components/links-list'),
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
            links={linksConfig}
            areLinksInteractive={matchDevice({
              nonDesktop: () => false,
            })}
          />
        ),
        server: () => (
          <LinksList links={linksConfig} areLinksInteractive={false} />
        ),
      })}
    </Styled.Header>
  );
};
