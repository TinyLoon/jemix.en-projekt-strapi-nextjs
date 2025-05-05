// src/hooks/useHeroContent.ts

import { useQuery } from "@tanstack/react-query";
import { useLanguageStore } from "@/store/useLanguageStore";
import { fetcher } from "@/lib/fetcher";

interface HeroContent {
  TopText?: string;
  MainText?: string;
  BottomText?: string;
  Button1?: string;
  Button2?: string;
}

export function useHeroContent(languageFromProps: string) {  // Umbenennen des Funktionsparameters
  const { language: currentLanguage } = useLanguageStore();  // Umbenennen des 'language'-Werts aus useLanguageStore

  const getLocale = () => {
    switch (currentLanguage) {  // Jetzt verwendest du 'currentLanguage' aus dem Store
      case "Deutsch":
        return "de";
      case "Spanish":
        return "es";
      default:
        return "en";
    }
  };

  const locale = getLocale();

  const { data, isLoading, error } = useQuery<HeroContent>({
    queryKey: ["heroContent", locale],
    queryFn: async () => {
      const res = await fetcher(`/main-content?locale=${locale}`);
      return res.data?.attributes;
    },
    staleTime: 1000 * 60 * 10, // 10 Minuten Cache
  });

  return {
    heroContent: data,
    isLoading,
    isError: !!error,
  };
}