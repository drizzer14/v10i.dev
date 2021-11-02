/* 
  eslint-disable eslint-comments/disable-enable-pair,
  functional/no-conditional-statement
*/

import { RefObject, useCallback, useRef, useState } from 'react';

import { timeout } from 'shared/utils';

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

export const useAutoTransition = <Element extends HTMLElement = HTMLElement>(
  handle: boolean,
  getValue: (element: Element) => number,
  defaultValue: number | null = 0
): [RefObject<Element>, string] => {
  const [preservedValue, setPreservedValue] = useState<number | null>(
    defaultValue
  );

  const [actualValue, setActualValue] = useState<number | null>(defaultValue);

  const enter = useCallback(() => {
    if (actualValue === 0) {
      setActualValue(preservedValue);
    }
  }, [actualValue, preservedValue]);

  const entered = useCallback(() => {
    if (actualValue !== null && actualValue > 0) {
      timeout(() => setActualValue(null), 150);
    }
  }, [actualValue]);

  useIsomorphicLayoutEffect(() => {
    if (handle) {
      enter();

      entered();
    }
  }, [handle, actualValue, enter, entered]);

  const exit = useCallback(() => {
    if (actualValue === null) {
      setActualValue(preservedValue);
    }
  }, [actualValue, preservedValue]);

  const exited = useCallback(() => {
    if (actualValue !== null && actualValue > 0) {
      timeout(() => setActualValue(0), preservedValue! / 4);
    }
  }, [actualValue, preservedValue]);

  useIsomorphicLayoutEffect(() => {
    if (!handle) {
      exit();

      exited();
    }
  }, [handle, actualValue, exit, exited]);

  const ref = useRef<Element>(null);

  useIsomorphicLayoutEffect(() => {
    if (actualValue === 0) {
      setPreservedValue(getValue(ref.current!));
    }
  }, [actualValue, getValue]);

  return [
    ref,
    ((value: null | number): string => {
      if (value === null) {
        return 'auto';
      }

      if (value !== 0) {
        return `${value}px`;
      }

      return `${value}`;
    })(actualValue),
  ];
};
