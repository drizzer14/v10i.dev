import { NextSeo } from 'next-seo';
import { FC, useMemo } from 'react';

import { seoConfig, SEOConfig } from './seo.config';

export const SEO: FC<SEOConfig> = (props) => {
  const { openGraph = {} } = props;

  const openGraphProps = useMemo(
    () => ({
      ...seoConfig.openGraph,
      ...openGraph,
    }),
    [openGraph]
  );

  return <NextSeo {...seoConfig} {...props} openGraph={openGraphProps} />;
};
