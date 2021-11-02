import { useCallback, useMemo, useState } from 'react';

import { useScrollObserver } from './use-scroll-observer';
import { useLayoutUpdateEffect } from './use-layout-update-effect';

export const useScrollThreshold = (
  observer: (isPastThreshold: boolean) => void,
  threshold: number | [from: number, to: number]
): void => {
  const [isPastThreshold, setThresholdPass] = useState(false);

  const [from, to] = useMemo<Exclude<typeof threshold, number>>(() => {
    return Array.isArray(threshold)
      ? threshold
      : [threshold, Number.MAX_SAFE_INTEGER];
  }, [threshold]);

  const onScroll = useCallback(
    (scrollOffset: number): void => {
      setThresholdPass(from <= scrollOffset && scrollOffset <= to);
    },
    [from, to]
  );

  useScrollObserver(onScroll);

  useLayoutUpdateEffect(() => {
    observer(isPastThreshold);
  }, [isPastThreshold]);
};
