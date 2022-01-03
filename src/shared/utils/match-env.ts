type Matchers<Value> = Record<
  'development' | 'test' | 'production',
  () => Value
>;

export function matchEnv<Value>(matchers: Matchers<Value>): Value;

export function matchEnv<Value>(
  matchers: Partial<Matchers<Value>>
): Value | undefined;

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function matchEnv<Value>(
  matchers: Partial<Matchers<Value>>
): Value | undefined {
  return matchers[process.env.appEnv as keyof typeof matchers]?.();
}
