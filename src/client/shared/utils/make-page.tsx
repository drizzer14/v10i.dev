import type { NextPage } from 'next';
import type { ReactElement } from 'react';

import type { PageFailProps, PageProps } from '../entity';

import { lazyLoad } from './lazy-load';

const Error = lazyLoad('Error', () => import('@/shared/components/error'));

export const makePage = <Props extends PageProps<any>>(
  render: (props: Exclude<Props, PageFailProps>['data']) => ReactElement | null
): NextPage<Props> => {
  return (props) => {
    if (props.isSuccess) {
      return render((props as Exclude<Props, PageFailProps>).data);
    }

    const {
      error: { statusCode, message },
    } = props as unknown as PageFailProps;

    return <Error statusCode={statusCode} message={message} />;
  };
};
