import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import type { Testimonial } from "@/types/types";

export function useTestimonialsSlider(language: string) {
  const locale =
    language === "Deutsch" ? "locale=de" :
    language === "Spanish" ? "locale=es" : "locale=en";

  const queryString = [locale, "populate=*"].join("&");

  const { data, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ["customerSliders", language],
    queryFn: async () => {
      const res = await fetcher(`/customer-sliders?${queryString}`);
      return res.data;
    },
    staleTime: 1000 * 60 * 10, // 10 Minuten Cache
  });

  return {
    testimonials: data,
    isLoading,
    isError: !!error,
  };
}