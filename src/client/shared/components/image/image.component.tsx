import type { FC } from 'react';

import * as Styled from './image.styles';

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

      {title && (
        <Styled.Caption>
          <small>{title}</small>
        </Styled.Caption>
      )}
    </Styled.Figure>
  );
};
