// src/hooks/useSliderCardContent.ts
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { useLanguageStore } from "@/store/useLanguageStore";

export interface SliderCardItem {
  id: number;
  attributes: {
    Name: string;
    Position: string;
    Text: string;
    Company: string;
  };
}

export const useSliderCardContent = () => {
  const language = useLanguageStore((state) => state.language);

  const locale = language === "Deutsch" ? "de" : language === "Spanish" ? "es" : "en";

  return useQuery<SliderCardItem[], Error>({
    queryKey: ["slider-card-content", locale],
    queryFn: async () => {
      const res = await fetcher(`/customer-sliders?locale=${locale}`);
      return res.data;
    },
  });
};
