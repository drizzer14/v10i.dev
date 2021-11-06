import type { NextSeoProps } from 'next-seo';

import { appConfig } from 'shared/config';

import packageJSON from '../../../../package.json';

const title = packageJSON.name;

export type SEOConfig = Omit<
  NextSeoProps,
  | 'additionalLinkTags'
  | 'additionalMetaTags'
  | 'canonical'
  | 'defaultTitle'
  | 'disableGooglebot'
  | 'facebook'
  | 'languageAlternates'
  | 'mobileAlternate'
  | 'nofollow'
  | 'noindex'
  | 'robotsProps'
  | 'titleTemplate'
>;

export const seoConfig: SEOConfig = {
  title,
  description: '💻 🖊',
  twitter: {
    cardType: 'summary_large_image',
  },
  openGraph: {
    locale: 'en_US',
    site_name: title,
    title,
    url: appConfig.baseURL,
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 600,
        alt: title,
      },
    ],
  },
};
