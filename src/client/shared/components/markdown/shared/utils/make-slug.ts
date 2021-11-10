import slugger from 'github-slugger';

export const makeSlug = (anchor: string): string => {
  return slugger.slug(anchor);
};
