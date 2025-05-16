// hooks/useTopCardsContent.ts

import  useSWR  from "swr"; // ✅ default import korrigiert
import { useLanguageStore } from "@/store/useLanguageStore";
import { fetcher } from "@/lib/fetcher";

interface IconAttributes {
  url: string;
}

interface IconData {
  attributes?: IconAttributes;
}

interface TopCardAttributes {
  Title: string;
  Description: string;
  Icon?: {
    data?: IconData;
  };
}

export interface TopCard {
  id: number;
  attributes: TopCardAttributes;
}

interface ApiResponse {
  data: TopCard[];
}

export const useTopCardsContent = () => {
  const { language } = useLanguageStore();

  const locale =
    language === "Deutsch" ? "de" : language === "Spanish" ? "es" : "en";

  const { data, error, isLoading } = useSWR<ApiResponse>(
    `/top-cards?locale=${locale}`,
    fetcher
  );

  return {
    data: data?.data ?? [],
    isLoading,
    error,
  };
};