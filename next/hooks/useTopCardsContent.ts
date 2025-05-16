// hooks/useTopCardsContent.ts

import useSWR from "swr"; // ✅ default import korrekt für SWR v2
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

  const { data, error, isLoading, isValidating } = useSWR<ApiResponse>(
    `/top-cards?locale=${locale}`,
    fetcher,
    {
      revalidateOnFocus: false, // optional: unterdrückt Neuladen beim Tabwechsel
      keepPreviousData: true,   // optional: zeigt alte Daten bis neue kommen
    }
  );

  return {
    data: data?.data ?? [],
    isLoading,
    isValidating,
    isError: !!error,
  };
};