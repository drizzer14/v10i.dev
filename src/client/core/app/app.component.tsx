import type { FC } from 'react';
import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';

import { SEO } from '@/modules/seo';
import { swrConfig } from '@/core/config';

import { Head } from './head';
import { Theme } from './theme';
import { Layout } from './layout';
import { Scripts } from './scripts';
import { ErrorBoundary } from './error-boundary';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <SEO />

      <Head />

      <Theme />

      <SWRConfig {...swrConfig}>
        <Layout>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Layout>
      </SWRConfig>

      <Scripts />
    </>
  );
};

export default App;
