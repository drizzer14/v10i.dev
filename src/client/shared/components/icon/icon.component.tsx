import { FC, forwardRef } from 'react';

import { lazyLoad } from '@/shared/utils';

import { SVGElementProps, IconNames, IconName, IconProps } from './icon.props';

const icons = Object.fromEntries(
  IconNames.map((iconName) => [
    iconName,
    lazyLoad('default', () => import(`public/assets/icons/${iconName}.svg`)),
  ])
) as Record<IconName, FC<SVGElementProps>>;

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { name, ...props },
  ref
) {
  const ResolvedIcon = icons[name];

  return <ResolvedIcon ref={ref} {...props} />;
});
