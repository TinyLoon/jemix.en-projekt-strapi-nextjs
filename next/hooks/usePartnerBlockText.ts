// src/hooks/usePartnerBlockText.ts
import { useQuery } from "@tanstack/react-query";
import { useLanguageStore } from "@/store/useLanguageStore";
import { fetcher } from "@/lib/fetcher";

export interface PartnerBlockText {
  MainText: string;
  SubText: string;
}

export const usePartnerBlockText = () => {
  const language = useLanguageStore((state) => state.language);

  const locale = language === "Deutsch" ? "de" : language === "Spanish" ? "es" : "en";

  return useQuery<PartnerBlockText, Error>({
    queryKey: ["partner-block-text", locale],
    queryFn: async () => {
      const res = await fetcher(`/partner-block-text?locale=${locale}`);
      return res.data.attributes;
    },
  });
};
