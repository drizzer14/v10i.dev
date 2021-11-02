import type { FC } from 'react';
import dynamic, { DynamicOptions } from 'next/dynamic';

import type { Props } from '../entity';

export const lazyLoad = <Name extends string, Component extends FC<any>>(
  name: Name,
  loader: () => Promise<{ [key in Name]: Component }>,
  options: DynamicOptions<Props<Component>> = {}
): Component => {
  return dynamic(
    () => loader().then((module) => module[name]),
    options
  ) as Component;
};
