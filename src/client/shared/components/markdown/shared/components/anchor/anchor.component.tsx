import Link from 'next/link';
import { AnchorHTMLAttributes, FC } from 'react';

import * as Styled from './anchor.styles';

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
};

export const Anchor: FC<AnchorProps> = ({ children, href, className }) => {
  return (
    <Link href={href} passHref>
      <Styled.Anchor className={className}>{children}</Styled.Anchor>
    </Link>
  );
};
