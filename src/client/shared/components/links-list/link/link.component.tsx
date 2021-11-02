import type { FC } from 'react';
import NextLink from 'next/link';

import { Icon } from '../../icon';
import { useCollapsibleTitle } from '../../../../core/app/layout/shared/hooks';
import { CollapsibleTitle } from '../../../../core/app/layout/shared/components/collapsible-title';

import * as Styled from './link.styles';
import type { LinkProps } from './link.props';

export const Link: FC<LinkProps> = ({
  href: url,
  icon,
  title,
  iconSizeModifier,
  isInteractive = true,
  isTitleDefaultShown = false,
}) => {
  const { ref, width, handlers } = useCollapsibleTitle(isTitleDefaultShown);

  return (
    <NextLink href={url} passHref>
      <Styled.Link
        target="_blank"
        rel="noreferrer"
        title={title}
        iconSizeModifier={iconSizeModifier}
        {...(isInteractive ? handlers : {})}
      >
        <Icon name={icon} />

        <CollapsibleTitle ref={ref} width={width}>
          {title}
        </CollapsibleTitle>
      </Styled.Link>
    </NextLink>
  );
};
