import { typographyConfig } from '@/core/app/theme/typography';

export const remToPx = (rem: number): number => rem * typographyConfig.fontSize;
