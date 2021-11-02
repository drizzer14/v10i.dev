import { useEffect, useLayoutEffect } from 'react';

import { matchRuntime } from '../utils';

export const useIsomorphicLayoutEffect = matchRuntime({
  client: () => useLayoutEffect,
  server: () => useEffect,
});
