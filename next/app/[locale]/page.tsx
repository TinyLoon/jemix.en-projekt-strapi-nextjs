import { Hero } from "@/components/LandingPage/Hero";
import TopCards from "@/components/LandingPage/TopCards";
import MidSection from "@/components/LandingPage/MidSection";
import TestimonialsSlider from "@/components/Slider/TestimonialsSlider";
import { ContactForm } from "@/components/Shared/ContactForm";
import { Footer } from "@/components/Shared/Footer";
import { CallToAction } from "@/components/Shared/CallToAction";
import LanguageDrawer from "@/components/Layout/LanguageDrawer";

// ✅ serverseitiges SEO
export async function generateMetadata() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homepage?populate[seo][populate]=*`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: { revalidate: 3600 }
  });

  const json = await res.json();
  const seo = json?.data?.attributes?.seo;

  return {
    title: seo?.metaTitle || "jemix – Modern Web",
    description: seo?.metaDescription || "Default Description",
    openGraph: {
      images: seo?.metaImage?.data
        ? [{ url: seo.metaImage.data.attributes.url }]
        : [],
    },
  };
}

// ✅ serverseitige Page-Komponente (kein "use client")
export default function Home() {
  return (
    <>
      <LanguageDrawer />
      <Hero />
      <TopCards />
      <MidSection />
      <CallToAction />
      <TestimonialsSlider />
      <ContactForm />
      <Footer />
    </>
  );
}