import { Fragment, FC } from 'react';

import { DotDivider } from '../dot-divider';

import * as Styled from './meta.styles';

type MetaProps = {
  contents: Array<string | number>;
  className?: string;
};

export const Meta: FC<MetaProps> = ({ contents, className }) => {
  return (
    <Styled.Meta className={className}>
      {contents.map((node, index) => {
        return (
          <Fragment key={node}>
            <small>{node}</small>

            {contents.length > index + 1 && <DotDivider />}
          </Fragment>
        );
      })}
    </Styled.Meta>
  );
};
