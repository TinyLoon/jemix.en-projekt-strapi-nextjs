// types/seo.ts

export interface SeoMeta {
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: {
    data?: {
      attributes?: {
        url?: string;
      };
    };
  };
}