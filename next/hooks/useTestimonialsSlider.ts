// src/hooks/useTestimonialsSlider.ts
import useSWR from "swr";
import { fetcher } from "@/../lib/api/fetcher"; // korrigierter Import
import type { Testimonial } from "@/../types/types"; // Typ bitte auslagern

export const useTestimonialsSlider = (language: string) => {
  const locale =
    language === "Deutsch"
      ? "?locale=de"
      : language === "Spanish"
      ? "?locale=es"
      : "";

  const { data, error, isLoading } = useSWR<Testimonial[]>(
    `/customer-sliders${locale}`,
    (url) => fetcher<Testimonial[]>(url)
  );

  return {
    data,
    error: !!error,
    isLoading,
  };
};