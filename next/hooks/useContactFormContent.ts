// src/hooks/useContactFormContent.ts
import useSWR from "swr";
import { fetcher } from "@/../lib/api/fetcher";
import { useLanguageStore } from "@/../store/useLanguageStore";

interface ContactFormCMSContent {
  Title: string;
  NamePlaceholder: string;
  BusinessPlaceholder: string;
  PhonePlaceholder: string;
  EmailPlaceholder: string;
  NewsPlaceholder: string;
  SubmitButtonText: string;
  SuccessMessage: string;
  ErrorMessage: string;
}

export const useContactFormContent = () => {
  const { language } = useLanguageStore();

  const locale = 
    language === "Deutsch" ? "de" :
    language === "Spanish" ? "es" : "en";

  const { data, error, isLoading } = useSWR<{ data: { attributes: ContactFormCMSContent } }>(
    `/contact-form-texts?locale=${locale}`,
    fetcher
  );

  return {
    content: data?.data.attributes,
    isLoading,
    isError: error,
  };
};
