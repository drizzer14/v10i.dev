import { Component, ReactNode } from 'react';
import { foldMap } from 'fnts/maybe/operators';
import { just, Maybe, nothing } from 'fnts/maybe';

import { Error } from '@/shared/components';
import { reportError } from '@/shared/utils';

type ErrorBoundaryState = {
  error: Maybe<Error>;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type ErrorBoundaryProps = {};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      error: nothing(),
    };
  }

  public override componentDidCatch(error: Error): void {
    this.setState({
      error: just(error),
    });

    reportError(error);
  }

  public override render(): ReactNode {
    return (
      foldMap(this.state.error, ({ message }) => {
        return <Error message={message} />;
      }) || this.props.children
    );
  }
}
