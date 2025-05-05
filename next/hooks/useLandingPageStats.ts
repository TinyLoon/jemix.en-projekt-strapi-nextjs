// src/hooks/useLandingPageStats.ts
import { useQuery } from "@tanstack/react-query";
import { useLanguageStore } from "@/store/useLanguageStore";
import { fetcher } from "@/lib/fetcher";

export interface LandingPageStat {
  id: number;
  attributes: {
    MainText: string;
    SubText: string;
  };
}

export const useLandingPageStats = () => {
  const language = useLanguageStore((state) => state.language);

  const locale = language === "Deutsch" ? "de" : language === "Spanish" ? "es" : "en";

  return useQuery<LandingPageStat[], Error>({
    queryKey: ["landing-page-stats", locale],
    queryFn: async () => {
      const res = await fetcher(`/landing-page-stat-cards?locale=${locale}`);
      return res.data;
    },
  });
};
