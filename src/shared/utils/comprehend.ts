export const comprehend = <Element, TransformedElement = Element>(
  array: Element[],
  predicate: (element: Element, index: number, array: Element[]) => boolean,
  transform: (
    element: Element,
    index: number,
    array: Element[]
  ) => TransformedElement
): TransformedElement[] => {
  const { length } = array;
  const result: TransformedElement[] = [];

  // eslint-disable-next-line functional/no-loop-statement, functional/no-let
  for (let index = 0; index < length; index += 1) {
    const current = array[index]!;

    // eslint-disable-next-line functional/no-conditional-statement
    if (predicate(current, index, array)) {
      // eslint-disable-next-line functional/immutable-data
      result.push(transform(current, index, array));
    }
  }

  return result;
};
