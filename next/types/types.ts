
export interface SliderCardContent {
  attributes: {
    // passe an, was genau im JSON zurückkommt
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
    // falls es weitere Felder gibt, ergänzen
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
