import { useCallback, useState } from 'react';

import { useScrollObserver } from '@/shared/hooks';

export const useProgress = (): number => {
  const [value, setValue] = useState(0);

  const onScroll = useCallback((scrollOffset: number): void => {
    const rootHeight = document.querySelector('#__next')?.clientHeight || 1;

    const windowHeight = window.innerHeight;

    setValue(
      Math.round(
        ((scrollOffset - windowHeight) / (rootHeight - windowHeight)) * 100
      )
    );
  }, []);

  useScrollObserver(onScroll);

  return value;
};
