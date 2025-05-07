import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_us';
  info: {
    description: 'Abschnitt \u00FCber das Unternehmen';
    displayName: 'AboutUs';
    icon: 'user';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media;
  };
}

export interface SharedCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_sections';
  info: {
    description: 'Call-to-Action mit Text und Button';
    displayName: 'CallToAction';
    icon: 'bullhorn';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    description: 'Seitenfu\u00DF mit Text, Kontakt und Links';
    displayName: 'Footer';
    icon: 'footer';
  };
  attributes: {
    contactEmail: Schema.Attribute.Email;
    socialLinks: Schema.Attribute.Component<'shared.navigation-link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    description: 'Navigationsbereich mit Logo und Men\u00FClinks';
    displayName: 'Header';
    icon: 'navigation';
  };
  attributes: {
    logo: Schema.Attribute.Media;
    navigationLinks: Schema.Attribute.Component<'shared.navigation-link', true>;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    description: 'Startbereich mit Haupt\u00FCberschrift, Text und Bild';
    displayName: 'HeroSection';
    icon: 'heading';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedNavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_links';
  info: {
    description: 'Ein einzelner Navigationslink';
    displayName: 'NavigationLink';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_items';
  info: {
    description: 'Einzelleistung mit Icon und Beschreibung';
    displayName: 'ServiceItem';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media;
    title: Schema.Attribute.String;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    description: 'Kundenmeinung mit Name, Position und Foto';
    displayName: 'Testimonial';
    icon: 'star';
  };
  attributes: {
    message: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media;
    position: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-us': SharedAboutUs;
      'shared.cta-section': SharedCtaSection;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
      'shared.hero-section': SharedHeroSection;
      'shared.navigation-link': SharedNavigationLink;
      'shared.service-item': SharedServiceItem;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
