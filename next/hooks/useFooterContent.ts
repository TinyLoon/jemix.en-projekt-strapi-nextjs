
import useSWR from "swr";
import { fetcher } from "@/../lib/api/fetcher";
import { useLanguageStore } from "@/../store/useLanguageStore";

interface FooterContent {
  Title: string;
  Description: string;
  FollowUs: string;
  FacebookLink: string;
  InstagramLink: string;
  LinkedInLink: string;
}

interface FooterApiResponse {
  data?: {
    id: number;
    attributes: FooterContent;
  };
}

export const useFooterContent = () => {
  const { language } = useLanguageStore();

  const locale =
    language === "Deutsch" ? "de" :
    language === "Spanish" ? "es" :
    "en";

  const { data, error, isLoading } = useSWR<FooterApiResponse>(
    `/footer-content?locale=${locale}`,
    fetcher
  );

  return {
    content: data?.data?.attributes ?? null,
    isLoading,
    isError: !!error,
  };
};