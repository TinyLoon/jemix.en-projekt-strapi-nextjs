import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";

interface AboutUsContent {
  headline?: string;
  content?: string;
  image?: {
    data?: {
      attributes?: {
        url: string;
        alternativeText?: string;
      };
    };
  };
}

export function useAboutUsContent(locale: string) {
  const langParam =
    locale === "Deutsch" ? "locale=de" :
    locale === "Spanish" ? "locale=es" : "locale=en";

  const query = [langParam, "populate[aboutUs][populate]=*"].join("&");

  const { data, isLoading, error } = useQuery<AboutUsContent>({
    queryKey: ["aboutUsContent", locale],
    queryFn: async () => {
      const res = await fetcher(`/homepage?${query}`);
      return res.data.attributes.aboutUs;
    },
    staleTime: 1000 * 60 * 10,
  });

  return {
    aboutUs: data,
    isLoading,
    isError: !!error,
  };
}