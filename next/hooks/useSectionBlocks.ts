import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";

export function useSectionBlocks(locale: string) {
  const langParam =
    locale === "Deutsch" ? "?locale=de" : locale === "Spanish" ? "?locale=es" : "";

  const { data, isLoading, error } = useQuery({
    queryKey: ["sectionBlocks", locale],
    queryFn: async () => {
      const res = await fetcher(`/homepage${langParam}&populate[sectionBlocks][populate]=*`);
      return res.data.attributes.sectionBlocks;
    },
  });

  return { sectionBlocks: data, isLoading, error };
}