import type { FC } from 'react';

import { Link } from './link';
import * as Styled from './links-list.styles';
import type { LinksListProps } from './links-list.props';

export const LinksList: FC<LinksListProps> = ({
  links,
  areLinksInteractive = true,
  areTitlesDefaultShown = false,
}) => {
  return (
    <Styled.LinksList>
      {links.map((link) => {
        return (
          <li key={link.title}>
            <Link
              {...link}
              isInteractive={areLinksInteractive}
              isTitleDefaultShown={areTitlesDefaultShown}
            />
          </li>
        );
      })}
    </Styled.LinksList>
  );
};
