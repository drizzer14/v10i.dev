import type { FC } from 'react';

import { lazyLoad } from '@/shared/utils';

import * as Styled from './image.styles';

// eslint-disable-next-line import/no-cycle
const Caption = lazyLoad('Caption', () => import('./caption'));

type ImageProps = {
  src: string;
  alt: string;
  title?: string;
  className?: string;
};

export const Image: FC<ImageProps> = ({ src, alt, title, className }) => {
  return (
    <Styled.Figure className={className}>
      <Styled.Image src={src} alt={alt} />

      {title && <Caption>{title}</Caption>}
    </Styled.Figure>
  );
};
