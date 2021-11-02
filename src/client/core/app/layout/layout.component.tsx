import type { FC } from 'react';

import { lazyLoad } from '@/shared/utils';

import { Footer } from './footer';
import { Header } from './header';
import * as Styled from './layout.styles';

const ScrollToTop = lazyLoad('ScrollToTop', () => import('./scroll-to-top'), {
  ssr: false,
});

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />

      <Styled.Main>{children}</Styled.Main>

      <ScrollToTop />

      <Footer />
    </>
  );
};
