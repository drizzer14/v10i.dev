import { AnchorHTMLAttributes, forwardRef } from 'react';

import * as Styled from './anchor.styles';

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
  function Anchor({ children, href, className }, ref) {
    return (
      <Styled.Anchor ref={ref} href={href} className={className}>
        {children}
      </Styled.Anchor>
    );
  }
);
