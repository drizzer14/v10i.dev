import { captureException } from '@sentry/nextjs';

export const reportError = (error: unknown): void => {
  console.error(error);

  captureException(error);
};
