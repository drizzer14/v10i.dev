import type { FC } from 'react';
import Script from 'next/script';

import { matchEnv } from 'shared/utils';

export const Scripts: FC = () => {
  return (
    <>
      <Script src="/polyfills/smoothscroll.js" />

      {matchEnv({
        production: () => (
          <>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-B0LGL8KKJ4"
            />

            <Script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B0LGL8KKJ4');`,
              }}
            />
          </>
        ),
      })}
    </>
  );
};
