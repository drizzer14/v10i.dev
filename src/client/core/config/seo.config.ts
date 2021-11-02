import type { NextSeoProps } from 'next-seo';

import { appConfig } from 'shared/config';

const title = 'v10i';

export type SEOConfig = Omit<
  NextSeoProps,
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
    cardType: 'summary',
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
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
      sizes: 'any',
    },
    {
      rel: 'icon',
      href: '/icon.svg',
      type: 'image/svg+xml',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};
