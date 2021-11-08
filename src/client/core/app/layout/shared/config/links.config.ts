import type { LinksConfig } from '@/shared/components/links-list';

import packageJSON from '../../../../../../../package.json';

export const linksConfig: LinksConfig = [
  {
    title: 'GitHub',
    href: packageJSON.homepage,
    icon: 'github',
  },
  {
    title: 'RSS',
    href: '/rss.xml',
    icon: 'rss',
    iconSizeModifier: 1.075,
  },
];
