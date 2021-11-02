import { foldMap } from 'fnts/maybe/operators';

import { maybeNavigator } from '../entity';

export const tryVibrate = (duration = 34): void => {
  foldMap(maybeNavigator, (navigator) => navigator.vibrate?.(duration));
};
