import type { NextApiHandler } from 'next';

import { getHTTPListener } from '$/core/bootstrap';

const apiHandler: NextApiHandler = (request, response) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const listener = await getHTTPListener();

    listener(request, response);

    response.on('finish', resolve);
  });
};

export default apiHandler;
