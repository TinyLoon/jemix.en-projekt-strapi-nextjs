// src/hooks/useMobilePhoneContent.ts
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { useLanguageStore } from "@/store/useLanguageStore";

interface MobilePhoneContent {
  Title?: string;
  Text?: string;
  [key: string]: any;
}

export const useMobilePhoneContent = () => {
  const { language } = useLanguageStore();

  const getLocale = (lang: string) => {
    switch (lang) {
      case "Deutsch":
        return "de";
      case "Spanish":
        return "es";
      default:
        return "en";
    }
  };

  const locale = getLocale(language);
  const queryKey = ["mobile-phone-content", locale];

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () =>
      fetcher(`/mobile-phonecontent?locale=${locale}`).then((res) => res?.data?.attributes),
  });

  return {
    content: data as MobilePhoneContent,
    isLoading,
    error,
  };
};
