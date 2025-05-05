// src/hooks/useLandingContent.ts
import { useLanguageStore } from "@/store/useLanguageStore";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const getLocaleParam = (language: string) => {
  switch (language) {
    case "Deutsch":
      return "?locale=de";
    case "Spanish":
      return "?locale=es";
    default:
      return "";
  }
};

export const useLandingContent = () => {
  const { language } = useLanguageStore();
  const localeParam = getLocaleParam(language);

  const mainContent = useQuery({
    queryKey: ["main-content", language],
    queryFn: () => fetcher(`${baseURL}/landing-page-main-header${localeParam}`),
  });

  const statCards = useQuery({
    queryKey: ["stat-cards", language],
    queryFn: () => fetcher(`${baseURL}/landing-page-stat-cards${localeParam}`),
  });

  const partnerBlock = useQuery({
    queryKey: ["partner-block", language],
    queryFn: () => fetcher(`${baseURL}/partner-block-text${localeParam}`),
  });

  const serviceLists = useQuery({
    queryKey: ["service-lists", language],
    queryFn: () => fetcher(`${baseURL}/service-lists${localeParam}`),
  });

  const customerSliderText = useQuery({
    queryKey: ["customer-slider-left-text", language],
    queryFn: () => fetcher(`${baseURL}/customer-slider-left-text${localeParam}`),
  });

  const mobilePhone = useQuery({
    queryKey: ["mobile-phonecontent", language],
    queryFn: () => fetcher(`${baseURL}/mobile-phonecontent${localeParam}`),
  });

  return {
    mainContent,
    statCards,
    partnerBlock,
    serviceLists,
    customerSliderText,
    mobilePhone,
  };
};
