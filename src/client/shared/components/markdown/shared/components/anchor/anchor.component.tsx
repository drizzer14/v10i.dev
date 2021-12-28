import { AnchorHTMLAttributes, forwardRef } from 'react';

import { orUndefined } from 'shared/utils';

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
  function Anchor({ children, href, target, className }, ref) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={orUndefined(target === '_blank' && 'noreferrer')}
        className={className}
      >
        {children}
      </a>
    );
  }
);
