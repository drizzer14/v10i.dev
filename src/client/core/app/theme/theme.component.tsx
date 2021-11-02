import type { FC } from 'react';

import { Fonts } from './fonts';
import { Reset } from './reset';
import { Palette } from './palette';
import { Typography } from './typography';

export const Theme: FC = () => {
  return (
    <>
      <Fonts />

      <Reset />

      <Palette />

      <Typography />
    </>
  );
};
