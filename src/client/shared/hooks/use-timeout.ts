/*
  eslint-disable eslint-comments/disable-enable-pair, 
  functional/immutable-data, 
  react-hooks/exhaustive-deps
*/
import { just } from 'fnts/maybe';
import type { Identity } from 'fnts/identity';
import { useCallback, useEffect } from 'react';
import { fmap, foldMap } from 'fnts/maybe/operators';

import { useMaybeRef } from './use-maybe-ref';

// https://thoughtspile.github.io/2021/10/13/really-declarative/
export const useTimeout = (
  callback: Identity<void>,
  delay?: number
): { set: Identity<void>; clear: Identity<void> } => {
  const maybeTimeoutID = useMaybeRef<NodeJS.Timeout>();

  const maybeCallback = useMaybeRef<Identity<void>>();

  useEffect(() => {
    maybeCallback.current = just(callback);
  }, [callback]);

  const clear = useCallback(() => {
    foldMap(maybeTimeoutID.current, clearTimeout);
  }, []);

  const set = useCallback(() => {
    clear();

    maybeTimeoutID.current = fmap(maybeCallback.current, (setter) =>
      setTimeout(setter, delay)
    );
  }, [delay]);

  useEffect(() => clear, []);

  return { set, clear };
};
