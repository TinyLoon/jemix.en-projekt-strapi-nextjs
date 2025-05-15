// components/dynamic-zone/manager.tsx

"use client";

import React from "react";

// Beispiel-Komponenten – du kannst diese nach und nach erweitern oder austauschen
import { Hero } from "@/components/LandingPage/Hero";
import MidSection from "@/components/LandingPage/MidSection";
import  TopCards  from "@/components/LandingPage/TopCards";
import { CallToAction } from "@/components/Shared/CallToAction";
import TestimonialsSlider from "@/components/Slider/TestimonialsSlider";

interface DynamicComponent {
  __component: string;
  [key: string]: any;
}

interface Props {
  dynamicZone: DynamicComponent[];
  locale?: string;
}

export default function DynamicZoneManager({ dynamicZone, locale }: Props) {
  return (
    <>
      {dynamicZone.map((block, index) => {
        switch (block.__component) {
          case "shared.hero-section":
            return <Hero key={index} />;

          case "shared.top-cards":
            return <TopCards key={index} />;

          case "shared.mid-section":
            return <MidSection key={index} />;

          case "shared.cta-section":
            return <CallToAction key={index} />;

          case "shared.testimonial":
            return <TestimonialsSlider key={index} />;

          default:
            console.warn(`⚠️ Unbekannte Komponente: ${block.__component}`);
            return null;
        }
      })}
    </>
  );
}