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
    description: 'Abschnitt mit Button und Aufruf';
    displayName: 'Call-To-Action';
    icon: 'cursor';
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
    description: 'Seitenfu\u00DF mit Socials, Rechtslinks, Sprache, Logo, Text';
    displayName: 'Footer';
    icon: 'footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    disclaimer: Schema.Attribute.Text;
    languageSwitch: Schema.Attribute.Boolean;
    legalLinks: Schema.Attribute.Component<'shared.navigation-link', true>;
    logo: Schema.Attribute.Media;
    socialLinks: Schema.Attribute.Component<'shared.navigation-link', true>;
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

export interface SharedSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_blocks';
  info: {
    description: 'Allgemeiner Block mit Bild, Titel, Text';
    displayName: 'Section Block';
    icon: 'align-justify';
  };
  attributes: {
    BottomHeading: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media;
    TopHeading: Schema.Attribute.String;
  };
}

export interface SharedSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_metas';
  info: {
    description: 'Metadaten f\u00FCr Suchmaschinen & Social Media';
    displayName: 'SEO Meta';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
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
      'shared.section-block': SharedSectionBlock;
      'shared.seo-meta': SharedSeoMeta;
      'shared.service-item': SharedServiceItem;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
