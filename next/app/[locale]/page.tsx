"use client";

import LanguageDrawer from "@/../components/Layout/LanguageDrawer";
import { Hero } from "@/../components/LandingPage/Hero";
import TopCards from "@/../components/LandingPage/TopCards";
import MidSection from "@/../components/LandingPage/MidSection";
import TestimonialsSlider from "@/../components/Slider/TestimonialsSlider";
import { ContactForm } from "@/../components/Shared/ContactForm";
import { Footer } from "@/../components/Shared/Footer";

export default function Home() {
  return (
    <>
      <LanguageDrawer />
      <Hero />
      <TopCards />
      <MidSection />
      <TestimonialsSlider />
      <ContactForm />
      <Footer />
    </>
  );
}
