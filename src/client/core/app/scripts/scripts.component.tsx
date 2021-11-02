import type { FC } from 'react';
import Script from 'next/script';

export const Scripts: FC = () => {
  return (
    <>
      <Script src="/polyfills/smoothscroll.js" />
    </>
  );
};
