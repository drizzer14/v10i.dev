import { HTTPStatus } from 'shared/entity';

export type ErrorConfig = Partial<Record<HTTPStatus, string>>;

export const errorConfig: ErrorConfig = {
  [HTTPStatus.NotFound]: '🤷‍♂️ Not found',
  [HTTPStatus.InternalServerError]: '😬 Unknown error',
};
