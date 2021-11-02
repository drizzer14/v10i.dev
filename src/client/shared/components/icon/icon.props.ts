import type { SVGProps } from 'react';

export type SVGElementProps = SVGProps<SVGSVGElement>;

export const IconNames = [
  'copy',
  'check',
  'chevron-up',
  'share',
  'github',
  'email',
  'logo',
  'rss',
] as const;

export type IconName = typeof IconNames[number];

export type IconProps = SVGElementProps & {
  name: IconName;
};
