import slugger from 'github-slugger';

export const makeSlug = (anchor: string): string =>
  slugger.slug(anchor).replace(/^-/, '');
