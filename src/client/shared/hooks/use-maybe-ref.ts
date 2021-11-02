import compose from 'fnts/compose';
import maybe, { Maybe } from 'fnts/maybe';
import { MutableRefObject, useRef } from 'react';

export const useMaybeRef = compose(useRef, maybe) as <Value>(
  value?: Value | undefined | null
) => MutableRefObject<Maybe<Value>>;
