import type { FC } from 'react';

import { useProgress } from './hooks';
import * as Styled from './progress.styles';

export const Progress: FC = () => {
  const value = useProgress();

  return (
    <Styled.ProgressBackground>
      <Styled.ProgressValue
        style={{ width: `${value}%` }}
        data-rounded={value !== 100}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </Styled.ProgressBackground>
  );
};
