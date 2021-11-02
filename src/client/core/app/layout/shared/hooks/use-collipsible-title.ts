import { HTMLAttributes, RefObject, useCallback } from 'react';

import { useToggle, useAutoTransition } from '@/shared/hooks';

type UseCollapsibleTitle = {
  ref: RefObject<HTMLElement>;
  width: string;
  handlers: Pick<
    HTMLAttributes<HTMLAnchorElement>,
    'onMouseOver' | 'onMouseLeave' | 'onFocus' | 'onBlur'
  >;
};

export const useCollapsibleTitle = (
  isDefaultShown = false
): UseCollapsibleTitle => {
  const [isTitleShown, toggleTitle] = useToggle(isDefaultShown);

  const [ref, width] = useAutoTransition(
    isTitleShown,
    (element) => element?.getBoundingClientRect?.()?.width,
    isDefaultShown ? null : 0
  );

  const showTitle = useCallback(() => {
    toggleTitle(true);
  }, [toggleTitle]);

  const hideTitle = useCallback(() => {
    toggleTitle(false);
  }, [toggleTitle]);

  return {
    ref,
    width,
    handlers: {
      onMouseOver: showTitle,
      onMouseLeave: hideTitle,
      onFocus: showTitle,
      onBlur: hideTitle,
    },
  };
};
