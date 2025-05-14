import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";

interface ServiceItem {
  id: number;
  attributes: {
    title: string;
    description?: string;
    icon?: {
      data?: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
  };
}

export function useServiceItems(locale: string) {
  const langParam =
    locale === "Deutsch" ? "locale=de" :
    locale === "Spanish" ? "locale=es" : "locale=en";

  const query = [langParam, "populate[services][populate]=*"].join("&");

  const { data, isLoading, error } = useQuery<ServiceItem[]>({
    queryKey: ["serviceItems", locale],
    queryFn: async () => {
      const res = await fetcher(`/homepage?${query}`);
      return res.data.attributes.services;
    },
    staleTime: 1000 * 60 * 10,
  });

  return {
    serviceItems: data,
    isLoading,
    isError: !!error,
  };
}