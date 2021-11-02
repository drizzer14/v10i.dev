import type { RequestError } from 'shared/entity';

export type PageSuccessProps<Data> = {
  isSuccess: true;
  data: Data;
};

export type PageFailProps = {
  isSuccess: false;
  error: RequestError;
};

export type PageProps<Data> = PageSuccessProps<Data> | PageFailProps;
