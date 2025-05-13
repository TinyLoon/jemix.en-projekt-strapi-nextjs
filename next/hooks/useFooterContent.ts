import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";

interface FooterContent {
  text?: string;
  contactEmail?: string;
  socialLinks: {
    label: string;
    url: string;
  }[];
}

export function useFooterContent(locale: string) {
  const langParam =
    locale === "Deutsch" ? "locale=de" :
    locale === "Spanish" ? "locale=es" : "locale=en";

  const query = [langParam, "populate[footer][populate]=*"].join("&");

  const { data, isLoading, error } = useQuery<FooterContent>({
    queryKey: ["footerContent", locale],
    queryFn: async () => {
      const res = await fetcher(`/homepage?${query}`);
      return res.data.attributes.footer;
    },
    staleTime: 1000 * 60 * 10,
  });

  return {
    footer: data,
    isLoading,
    isError: !!error,
  };
}