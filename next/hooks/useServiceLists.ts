// src/hooks/useServiceLists.ts
import { useQuery } from "@tanstack/react-query";
import { useLanguageStore } from "@/store/useLanguageStore";
import { fetcher } from "@/lib/fetcher";

export interface ServiceListItem {
  id: number;
  attributes: {
    TopHeading: string;
    BottomHeading: string;
    Description: string;
  };
}

export const useServiceLists = () => {
  const language = useLanguageStore((state) => state.language);

  const locale = language === "Deutsch" ? "de" : language === "Spanish" ? "es" : "en";

  return useQuery<ServiceListItem[], Error>({
    queryKey: ["service-lists", locale],
    queryFn: async () => {
      const res = await fetcher(`/service-lists?locale=${locale}`);
      return res.data;
    },
  });
};
