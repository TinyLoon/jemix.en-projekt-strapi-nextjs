// src/hooks/useMidSectionData.ts
import useSWR from "swr";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
const fetcher = (url: string) => fetch(url).then(res => res.json());

const getLocaleParam = (lang: string) => {
  switch (lang) {
    case "Deutsch": return "?locale=de";
    case "Spanish": return "?locale=es";
    default: return "?locale=en";
  }
};

export const useMidSectionData = () => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.language
  );
  const locale = getLocaleParam(currentLanguage);

  const { data: sliderCards } = useSWR(`${baseURL}/customer-sliders${locale}`, fetcher);
  const { data: landingMain } = useSWR(`${baseURL}/landing-page-main-header${locale}`, fetcher);
  const { data: stats } = useSWR(`${baseURL}/landing-page-stat-cards${locale}`, fetcher);
  const { data: partnerBlock } = useSWR(`${baseURL}/partner-block-text${locale}`, fetcher);
  const { data: services } = useSWR(`${baseURL}/service-lists${locale}`, fetcher);
  const { data: customerText } = useSWR(`${baseURL}/customer-slider-left-text${locale}`, fetcher);
  const { data: phoneContent } = useSWR(`${baseURL}/mobile-phonecontent${locale}`, fetcher);

  return {
    currentLanguage,
    sliderCardContent: sliderCards?.data || [],
    landingPageMainContent: landingMain?.data?.attributes || null,
    landingPageStats: stats?.data || [],
    partnerBlockText: partnerBlock?.data?.attributes || null,
    serviceListData: services?.data || [],
    customerSliderLeftText: customerText?.data?.attributes || null,
    phoneContent: phoneContent?.data?.attributes || null,
  };
};
