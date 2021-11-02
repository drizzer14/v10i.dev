/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  import type { FC, SVGProps } from 'react';

  const content: FC<SVGProps<SVGSVGElement>>;

  export default content;
}
