import { DependencyList, EffectCallback, useRef, useEffect } from 'react';

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

export const useLayoutUpdateEffect = (
  effect: EffectCallback,
  deps: DependencyList
): void => {
  const mountRef = useRef(false);

  useIsomorphicLayoutEffect(() => {
    // eslint-disable-next-line functional/no-conditional-statement
    if (mountRef.current) {
      effect();
    }
  }, [effect, ...deps]);

  useEffect(() => {
    /* eslint-disable functional/no-expression-statement, functional/immutable-data */
    mountRef.current = true;

    return () => {
      mountRef.current = false;
    };
    /* eslint-enable functional/no-expression-statement, functional/immutable-data */
  }, []);
};
