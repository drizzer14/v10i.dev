import packageJSON from '../../../../../../../../package.json';

import type { LinkProps as Link } from './link';

export type LinksListConfig = Array<
  Omit<Link, 'isInteractive' | 'isTitleDefaultShown'>
>;

export const linksListConfig: LinksListConfig = [
  {
    title: 'GitHub',
    href: packageJSON.homepage,
    icon: 'github',
    iconSizeModifier: 1.04,
  },
  {
    title: 'RSS',
    href: '/rss.xml',
    icon: 'rss',
    iconSizeModifier: 0.9,
  },
];
