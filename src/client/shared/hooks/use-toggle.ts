import { Reducer, useReducer } from 'react';

export const useToggle = (
  initialValue?: boolean
): [state: boolean, dispatch: (value?: boolean) => void] => {
  return useReducer<Reducer<boolean, boolean | undefined>>(
    (prevValue, nextValue) => {
      return nextValue === undefined ? !prevValue : nextValue;
    },
    initialValue ?? false
  );
};
