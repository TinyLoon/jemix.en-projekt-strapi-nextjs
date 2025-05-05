// src/hooks/useNavbarContent.ts
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { useLanguageStore } from "@/store/useLanguageStore";

interface NavbarItem {
  id: number;
  label: string;
  link: string;
}

interface NavbarAttributes {
  items: NavbarItem[];
}

interface NavbarResponse {
  data: {
    id: number;
    attributes: NavbarAttributes;
  };
}

export const useNavbarContent = () => {
  const language = useLanguageStore((state) => state.language);

  const locale =
    language === "Deutsch" ? "de" :
    language === "Spanish" ? "es" : "en";

  return useQuery<NavbarResponse>({
    queryKey: ["navbar", locale],
    queryFn: () => fetcher(`/navbar?locale=${locale}`),
    staleTime: 1000 * 60 * 5, // optional: 5 Minuten cache
  });
};
