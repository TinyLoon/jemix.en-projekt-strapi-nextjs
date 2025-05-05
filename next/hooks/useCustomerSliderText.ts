import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { useLanguageStore } from "@/store/useLanguageStore";

export interface CustomerSliderText {
  MainText: string;
  SubText: string;
}

export const useCustomerSliderText = () => {
  const language = useLanguageStore((state) => state.language);

  const getLocaleParam = (lang: string) => {
    switch (lang) {
      case "Deutsch":
        return "?locale=de";
      case "Spanish":
        return "?locale=es";
      default:
        return "?locale=en";
    }
  };

  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["customer-slider-left-text", language],
    queryFn: () =>
      fetcher(`/customer-slider-left-text${getLocaleParam(language)}`),
    select: (res) => res?.data?.attributes as CustomerSliderText,
  });

  return {
    text: data,
    isLoading,
    isError,
  };
};
