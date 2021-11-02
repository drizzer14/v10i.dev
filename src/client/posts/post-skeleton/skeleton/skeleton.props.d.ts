export type SkeletonSize =
  | string
  | {
      min?: number;
      max?: number;
      unit: string;
    };

export type SkeletonProps = {
  className?: string;
  width?: SkeletonSize;
  height?: SkeletonSize;
};
