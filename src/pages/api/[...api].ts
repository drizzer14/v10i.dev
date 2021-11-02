import type { NextApiHandler } from 'next';
import { withSentry } from '@sentry/nextjs';

import { getHTTPListener } from '$/core/bootstrap';

const apiHandler: NextApiHandler = withSentry((request, response) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const listener = await getHTTPListener();

    listener(request, response);

    response.on('finish', resolve);
  });
});

export default apiHandler;
