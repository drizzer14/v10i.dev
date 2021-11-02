import { FC } from 'react';

import * as Styled from './favicon.styles';

type FaviconProps = {
  src: string;
  height: number;

  onError: () => void;
};

export const Favicon: FC<FaviconProps> = ({ src, height, onError }) => {
  return <Styled.Favicon src={src} style={{ height }} onError={onError} />;
};
