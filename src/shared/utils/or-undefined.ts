export const orUndefined = <Value>(
  value: Value
): Exclude<Value, '' | false | null> | undefined => {
  return (value || undefined) as Exclude<Value, '' | false | null> | undefined;
};
