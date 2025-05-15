import type { Metadata } from "next";
import { strapiImage } from "@/lib/strapi/strapiImage";

type TwitterCardType = "summary_large_image" | "summary" | "player" | "app";

interface SEOData {
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  metaImage?: {
    url: string;
  };
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export function generateMetadataObject(seo: SEOData = {}): Metadata {
  const validCardTypes: TwitterCardType[] = ["summary_large_image", "summary", "player", "app"];
  const defaultCardType: TwitterCardType = "summary_large_image";

  const selectedCardType: TwitterCardType = validCardTypes.includes(seo.twitterCard as TwitterCardType)
    ? (seo.twitterCard as TwitterCardType)
    : defaultCardType;

  return {
    title: seo.metaTitle ?? "Default Title",
    description: seo.metaDescription ?? "Default Description",
    openGraph: {
      title: seo.ogTitle ?? seo.metaTitle ?? "Default OG Title",
      description: seo.ogDescription ?? seo.metaDescription ?? "Default OG Description",
      images: seo.metaImage?.url ? [{ url: strapiImage(seo.metaImage.url) }] : [],
    },
    twitter: {
      card: selectedCardType,
      title: seo.twitterTitle ?? seo.metaTitle ?? "Default Twitter Title",
      description: seo.twitterDescription ?? seo.metaDescription ?? "Default Twitter Description",
      images: seo.twitterImage ? [{ url: seo.twitterImage }] : [],
    },
  };
}