import type { FC } from 'react';

import * as Styled from './image.styles';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Image: FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <Styled.Image className={className}>
      <img src={src} alt={alt} />
    </Styled.Image>
  );
};
