export const rethrow = <Error>(
  tap?: (error: Error) => void
): ((error: Error) => never) => {
  return (error) => {
    tap?.(error);

    throw error;
  };
};
