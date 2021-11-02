import type { LinkProps as Link } from './link';

export type Links = Array<Omit<Link, 'isInteractive' | 'isTitleDefaultShown'>>;

export type LinksListProps = {
  links: Links;
  areLinksInteractive?: boolean;
  areTitlesDefaultShown?: boolean;
};

export type LinksConfig = Links;
