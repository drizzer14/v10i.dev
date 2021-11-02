import type { LinksConfig } from '@/shared/components/links-list';

import packageJSON from '../../../../package.json';

export const linksConfig: LinksConfig = [
  {
    title: packageJSON.name,
    href: `${packageJSON.homepage}/issues`,
    icon: 'github',
  },
  {
    title: packageJSON.author.email,
    href: `mailto:${packageJSON.author.email}`,
    icon: 'email',
  },
];
