// next/hooks/useHeroContent.ts

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

export function useHeroContent(languageFromProps?: string) {
  const { language: currentLanguage } = useLanguageStore();

  const getLocale = () => {
    switch (languageFromProps || currentLanguage) {
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
      const res = await fetcher(`/main-content?locale=${locale}&populate=*`);
      return res.data?.attributes;
    },
    staleTime: 1000 * 60 * 10,
  });

  return {
    heroContent: data,
    isLoading,
    isError: !!error,
  };
}