"use client";

import { useCallToAction } from "@/hooks/useCallToAction";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Button } from "@mui/material";

export function CallToAction() {
  const { language } = useLanguageStore();
  const { callToAction } = useCallToAction(language);

  if (!callToAction) return null;

  return (
    <section className="py-24 bg-blue-600 text-white text-center">
      <div className="max-w-2xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-bold">{callToAction.headline}</h2>
        <p className="text-lg">{callToAction.text}</p>
        <Button
          variant="contained"
          color="inherit"
          href={callToAction.buttonLink}
        >
          {callToAction.buttonText}
        </Button>
      </div>
    </section>
  );
}