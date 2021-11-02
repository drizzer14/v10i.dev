import type { FC } from 'react';

import { Link } from './link';
import * as Styled from './links-list.styles';
import { linksListConfig } from './links-list.config';

type LinksListProps = {
  areLinksInteractive: boolean;
  areTitlesDefaultShown: boolean;
};

export const LinksList: FC<LinksListProps> = ({
  areLinksInteractive = true,
  areTitlesDefaultShown = false,
}) => {
  return (
    <Styled.LinksList>
      {linksListConfig.map((socialLinkProps) => {
        return (
          <li key={socialLinkProps.title}>
            <Link
              {...socialLinkProps}
              isInteractive={areLinksInteractive}
              isTitleDefaultShown={areTitlesDefaultShown}
            />
          </li>
        );
      })}
    </Styled.LinksList>
  );
};
