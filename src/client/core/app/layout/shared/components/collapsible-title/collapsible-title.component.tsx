import { forwardRef, PropsWithChildren } from 'react';

import * as Styled from './collapsible-title.styles';

export type CollapsibleTitleProps = PropsWithChildren<{
  width?: string;
}>;

export const CollapsibleTitle = forwardRef<HTMLElement, CollapsibleTitleProps>(
  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
  function CollapsibleTitle({ children, width }, ref) {
    return (
      <Styled.CollapsibleTitle style={width ? { width } : undefined}>
        <small ref={ref}>{children}</small>
      </Styled.CollapsibleTitle>
    );
  }
);
