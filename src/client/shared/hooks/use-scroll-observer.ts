import { useCallback } from 'react';

import { useTimeout } from './use-timeout';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

export const useScrollObserver = (
  observer: (scrollOffset: number) => void
): void => {
  const { set: debounce } = useTimeout(() => {
    observer(window.scrollY + window.innerHeight);
  }, 17);

  const onScroll = useCallback<EventListener>(() => {
    debounce();
  }, [debounce]);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
};
