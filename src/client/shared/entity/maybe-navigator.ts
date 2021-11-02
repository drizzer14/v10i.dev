import maybe from 'fnts/maybe';

import { matchRuntime } from '../utils/match-runtime';

export const maybeNavigator = maybe(
  matchRuntime({
    client: () => window.navigator,
  })
);
