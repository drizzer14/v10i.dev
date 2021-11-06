import { typographyConfig } from '@/core/app/theme/typography/typography.config';

export const remToPx = (rem: number): number => rem * typographyConfig.fontSize;
