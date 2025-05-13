// next/types/types.ts

export interface Testimonial {
  id?: number;
  name: string;
  position?: string;
  message: string;
  photo?: {
    data?: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
}

export interface SliderCardContent {
  attributes: {
    title: string;
    description: string;
  };
}

export interface LandingPageMainContent {
  MainHeading: string;
  SubHeading: string;
  Description1: string;
  Description2: string;
}

export interface LandingPageStat {
  attributes: {
    MainText: string;
    SubText: string;
  };
}

export interface PartnerBlockText {
  MainText: string;
  SubText: string;
}

export interface ServiceListItem {
  attributes: {
    TopHeading: string;
    // Ergänze hier ggf. weitere Felder wie BottomHeading, Description etc.
  };
}

export interface CustomerSliderLeftText {
  Title: string;
  Description: string;
}

export interface PhoneContent {
  Title: string;
  SubText: string;
}

export interface FormData {
  name: string;
  business: string;
  phoneNumber: string;
  email: string;
  news: string;
}