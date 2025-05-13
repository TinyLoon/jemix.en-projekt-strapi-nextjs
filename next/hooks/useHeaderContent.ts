import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";

interface NavigationLink {
  label: string;
  url: string;
}

interface HeaderContent {
  logo?: {
    data?: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  navigationLinks: NavigationLink[];
}

export function useHeaderContent(locale: string) {
  const langParam =
    locale === "Deutsch" ? "locale=de" :
    locale === "Spanish" ? "locale=es" : "locale=en";

  const query = [
    langParam,
    "populate[header][populate]=*"
  ].join("&");

  const { data, isLoading, error } = useQuery<HeaderContent>({
    queryKey: ["headerContent", locale],
    queryFn: async () => {
      const res = await fetcher(`/homepage?${query}`);
      return res.data.attributes.header;
    },
    staleTime: 1000 * 60 * 10,
  });

  return {
    header: data,
    isLoading,
    isError: !!error,
  };
}