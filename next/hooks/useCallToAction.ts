import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";

export function useCallToAction(locale: string) {
  const langParam =
    locale === "Deutsch" ? "?locale=de" : locale === "Spanish" ? "?locale=es" : "";

  const { data, isLoading, error } = useQuery({
    queryKey: ["callToAction", locale],
    queryFn: async () => {
      const res = await fetcher(`/homepage${langParam}&populate[CTA]=*`);
      return res.data.attributes.CTA;
    },
  });

  return { callToAction: data, isLoading, error };
}