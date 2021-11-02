import type { FC } from 'react';

import { formatDateString } from '@/shared/utils';
import type { Post, SEOProps } from 'shared/entity';

import { DotDivider } from '../dot-divider';

import * as Styled from './meta.styles';

type MetaProps = Pick<Post, 'readTime'> &
  Pick<SEOProps, 'date'> & {
    className?: string;
  };

export const Meta: FC<MetaProps> = ({ date, readTime, className }) => {
  return (
    <Styled.Meta className={className}>
      <small>{formatDateString(date!)}</small>

      <DotDivider />

      <small>{`${readTime} minute${readTime > 1 ? 's' : ''} read`}</small>
    </Styled.Meta>
  );
};
