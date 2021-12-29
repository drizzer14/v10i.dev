export const formatReadTime = (readTime: number): string => {
  return `${readTime} minute${readTime > 1 ? 's' : ''} read`;
};
