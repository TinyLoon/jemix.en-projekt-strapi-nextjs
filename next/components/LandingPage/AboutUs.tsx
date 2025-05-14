"use client";

import Image from "next/image";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useAboutUsContent } from "@/hooks/useAboutUsContent";
import { Container, Grid, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

export function AboutUs() {
  const { language } = useLanguageStore();
  const { aboutUs } = useAboutUsContent(language);

  if (!aboutUs) return null;

  return (
    <section className="bg-white py-20">
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className="font-bold mb-4">
              {aboutUs.headline}
            </Typography>
            <ReactMarkdown className="prose">{aboutUs.content || ""}</ReactMarkdown>
          </Grid>
          <Grid item xs={12} md={6}>
            {aboutUs.image?.data?.attributes?.url && (
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={aboutUs.image.data.attributes.url}
                  alt={aboutUs.image.data.attributes.alternativeText || "About us image"}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}