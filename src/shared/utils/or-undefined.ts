export const orUndefined = (value: unknown): true | undefined => {
  return Boolean(value) || undefined;
};
