import type { FC } from 'react';
import NextHead from 'next/head';

export const Head: FC = () => {
  return (
    <NextHead>
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <link rel="icon" href="/icon.svg" type="image/svg+xml" />

      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      <link rel="manifest" href="/manifest.json" />

      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="hsl(210, 11%, 99%)"
      />

      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="hsl(210, 9%, 10%)"
      />
    </NextHead>
  );
};
