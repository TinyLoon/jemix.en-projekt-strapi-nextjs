// src/hooks/useLandingPageMainContent.ts

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher"; // stellt sicher, dass alle API-Calls konsistent funktionieren

export interface LandingPageMainContent {
  MainHeading: string;
  SubHeading?: string;
  Description1?: string;
  Description2?: string;
  Image?: {
    data?: {
      attributes?: {
        url: string;
        alternativeText?: string;
      };
    };
  };
}

export function useLandingPageMainContent(locale: string) {
  const langParam =
    locale === "Deutsch" ? "?locale=de" : locale === "Spanish" ? "?locale=es" : "";

  const { data, error, isLoading } = useSWR(
    `/landing-page-main-header${langParam}`,
    fetcher
  );

  return {
    mainContent: data?.data?.attributes as LandingPageMainContent,
    isLoading,
    isError: !!error,
  };
}
