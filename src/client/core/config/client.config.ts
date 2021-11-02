export type ClientConfig = {
  apiURL: string;
  apiRequestCacheTTL: number;
};

export const clientConfig: ClientConfig = {
  apiURL: process.env.apiURL!,
  apiRequestCacheTTL: Number(process.env.apiRequestCacheTTL),
};
