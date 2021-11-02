import Link from 'next/link';
import { FC, useMemo } from 'react';

import { HTTPStatus } from 'shared/entity';

import * as Styled from './error.styles';
import { errorConfig } from './error.config';

type ErrorProps = {
  message?: string;
  statusCode?: HTTPStatus;
};

export const Error: FC<ErrorProps> = ({
  message,
  statusCode = HTTPStatus.InternalServerError,
}) => {
  const description = useMemo(() => {
    if (message) {
      return message;
    }

    return errorConfig[statusCode];
  }, [statusCode, message]);

  return (
    <Styled.Error>
      <h1>{statusCode}</h1>

      <p>{description}</p>

      <Link href="/">Go to main page</Link>
    </Styled.Error>
  );
};
