export type SEOProps = {
  title: string;
  description: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  url: string;
  date?: string;
};
