import type { HTTPStatus } from './http-status';

export type RequestError = {
  url: string;
  message: string;
  statusCode: HTTPStatus;
};
