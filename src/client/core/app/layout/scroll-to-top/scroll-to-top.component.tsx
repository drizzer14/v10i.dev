import type { FC } from 'react';
import { just, nothing } from 'fnts/maybe';
import { bind } from 'fnts/maybe/operators';

import { tryVibrate } from '@/shared/utils';
import { Icon } from '@/shared/components/icon';
import { useToggle, useScrollThreshold, useMaybeRef } from '@/shared/hooks';

import * as Styled from './scroll-to-top.styles';

export const ScrollToTop: FC = () => {
  const [isVisible, toggleVisibility] = useToggle();

  const [shouldRender, toggleRender] = useToggle();

  const timeoutRef = useMaybeRef<NodeJS.Timeout>();

  useScrollThreshold((isPastThreshold) => {
    // eslint-disable-next-line functional/immutable-data
    timeoutRef.current = bind(timeoutRef.current, (timeoutId) => {
      clearTimeout(timeoutId);

      return nothing();
    });

    /* eslint-disable functional/no-conditional-statement, functional/immutable-data */
    if (isPastThreshold) {
      toggleRender(true);

      timeoutRef.current = just(
        setTimeout(() => {
          toggleVisibility(true);
        }, 167)
      );
    } else {
      toggleVisibility(false);

      timeoutRef.current = just(
        setTimeout(() => {
          toggleRender(false);
        }, 167)
      );
    }
    /* eslint-enable functional/no-conditional-statement, functional/immutable-data */
  }, window.innerHeight * 1.25);

  return shouldRender ? (
    <Styled.ScrollToTop
      data-visible={isVisible}
      onClick={() => {
        tryVibrate();

        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
      title="Scroll to top"
    >
      <Icon name="chevron-up" />
    </Styled.ScrollToTop>
  ) : null;
};
