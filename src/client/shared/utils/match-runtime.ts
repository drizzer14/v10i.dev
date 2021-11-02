type Matchers<Value> = Record<'client' | 'server', () => Value>;

export function matchRuntime<Value>(matchers: Matchers<Value>): Value;

export function matchRuntime<Value>(
  matchers: Partial<Matchers<Value>>
): Value | undefined;

export function matchRuntime<Value>(
  matchers: Partial<Matchers<Value>>
): Value | undefined {
  const { client, server } = matchers;

  return typeof window === 'undefined' ? server?.() : client?.();
}
