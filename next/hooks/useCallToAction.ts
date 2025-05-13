import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";

interface CallToActionContent {
  headline?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function useCallToAction(locale: string) {
  const langParam =
    locale === "Deutsch" ? "locale=de" :
    locale === "Spanish" ? "locale=es" : "";

  const queryString = [langParam, "populate[CTA]=*"].filter(Boolean).join("&");

  const { data, isLoading, error } = useQuery<CallToActionContent>({
    queryKey: ["callToAction", locale],
    queryFn: async () => {
      const res = await fetcher(`/homepage?${queryString}`);
      return res.data.attributes.CTA;
    },
    staleTime: 1000 * 60 * 10,
  });

  return {
    callToAction: data,
    isLoading,
    isError: !!error,
  };
}