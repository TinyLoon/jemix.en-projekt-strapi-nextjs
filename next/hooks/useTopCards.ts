// src/hooks/useTopCards.ts
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export const useTopCards = (language: string) => {
  const localeParam =
    language === "Deutsch"
      ? "?locale=de"
      : language === "Spanish"
      ? "?locale=es"
      : "";

  return useSWR(`/landing-page-stat-cards${localeParam}`, fetcher);
};
