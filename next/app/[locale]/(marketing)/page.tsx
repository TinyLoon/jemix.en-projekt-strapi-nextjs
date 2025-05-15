// app/[locale]/(marketing)/page.tsx
import { SeoMeta } from "@/types/seo";
import { Metadata } from 'next';
import PageContent from '@/lib/shared/PageContent';
import fetchContentType from '@/lib/strapi/fetchContentType';
import { generateMetadataObject } from '@/lib/shared/metadata';
import ClientSlugHandler from './ClientSlugHandler';

interface PageData {
  seo?: SeoMeta;
  localizations?: { locale: string }[];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const pageData = await fetchContentType<PageData>(
    'pages',
    {
      filters: {
        slug: "homepage",
        locale: params.locale,
      },
      populate: "seo.metaImage",
    },
    true
  );

  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  const pageData = await fetchContentType<PageData>(
    'pages',
    {
      filters: {
        slug: "homepage",
        locale: params.locale,
      },
    },
    true
  );

  const localizedSlugs = pageData.localizations?.reduce(
    (acc: Record<string, string>, localization) => {
      acc[localization.locale] = "";
      return acc;
    },
    { [params.locale]: "" }
  );

  return (
    <>
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <PageContent pageData={pageData} />
    </>
  );
}