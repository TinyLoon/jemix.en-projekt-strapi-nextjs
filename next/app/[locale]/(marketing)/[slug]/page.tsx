import { Metadata } from "next";
import PageContent from "@/lib/shared/PageContent";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { generateMetadataObject } from "@/lib/shared/metadata";
import SlugProviderWrapper from "@/components/context/SlugProviderWrapper";

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

interface PageData {
  locale?: string;
  dynamic_zone?: {
    __component: string;
    [key: string]: unknown;
  }[];
  seo?: SEOData;
  localizations?: {
    locale: string;
    slug: string;
  }[];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const pageData = await fetchContentType<PageData>(
    "pages",
    {
      filters: {
        slug: params.slug,
        locale: params.locale,
      },
      populate: "seo.metaImage",
    },
    true
  );

  return generateMetadataObject(pageData?.seo);
}

export default async function SlugPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const pageData = await fetchContentType<PageData>(
    "pages",
    {
      filters: {
        slug: params.slug,
        locale: params.locale,
      },
      populate: "*",
    },
    true
  );

  const localizedSlugs = pageData.localizations?.reduce(
    (acc: Record<string, string>, loc) => {
      acc[loc.locale] = loc.slug;
      return acc;
    },
    { [params.locale]: params.slug }
  );

  return (
    <SlugProviderWrapper slugs={localizedSlugs}>
      <PageContent pageData={pageData} />
    </SlugProviderWrapper>
  );
}