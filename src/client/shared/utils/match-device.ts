import { foldMap } from 'fnts/maybe/operators';

import { maybeNavigator } from '../entity';

const mobileRegExp =
  /Mobile|Android|iP(?:hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(?:hpw|web)OS|Opera M(?:obi|ini)/;

const tabletRegExp = /tablet|ipad|playbook|silk|android(?!.*mobi)/i;

type Matchers<Value> = Record<
  'mobile' | 'tablet' | 'desktop' | 'nonDesktop',
  () => Value
>;

export function matchDevice<Value>(
  matchers: Pick<Matchers<Value>, 'desktop' | 'nonDesktop'>
): Value;

export function matchDevice<Value>(
  matchers: Pick<Matchers<Value>, 'desktop' | 'mobile' | 'tablet'>
): Value;

export function matchDevice<Value>(
  matchers: Partial<Matchers<Value>>
): Value | undefined;

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function matchDevice<Value>(
  matchers: Partial<Matchers<Value>>
): Value | undefined {
  return foldMap(maybeNavigator, (navigator) => {
    if (mobileRegExp.test(navigator.userAgent)) {
      if (matchers.mobile) {
        return matchers.mobile();
      }

      if (matchers.nonDesktop) {
        return matchers.nonDesktop();
      }
    }

    if (tabletRegExp.test(navigator.userAgent)) {
      if (matchers.tablet) {
        return matchers.tablet();
      }

      if (matchers.nonDesktop) {
        return matchers.nonDesktop();
      }
    }

    return matchers.desktop?.();
  }) as Value | undefined;
}
