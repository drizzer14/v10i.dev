import {
  css,
  CSSObject,
  SimpleInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components';

export type Mixin = (
  strings: TemplateStringsArray | CSSObject,
  ...interpolations: SimpleInterpolation[]
) => FlattenSimpleInterpolation;

export const mixin = (
  factory: (styles: FlattenSimpleInterpolation) => FlattenSimpleInterpolation
): Mixin => {
  return (strings, ...interpolations) => {
    return factory(css(strings, ...interpolations));
  };
};
