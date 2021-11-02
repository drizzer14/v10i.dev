export type Props<Component extends FC<any>> = Component extends FC<
  infer ComponentProps
>
  ? PropsWithChildren<ComponentProps>
  : never;
