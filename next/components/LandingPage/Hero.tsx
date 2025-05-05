"use client";

import { Container, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useHeroContent } from "../../hooks/useHeroContent";
import { useLanguageStore } from "../../store/useLanguageStore";
import heroImage from "../../public/hero-svg.png";

export const Hero = () => {
  const { language } = useLanguageStore();
  const { heroContent: mainContent } = useHeroContent(language);

  const splitText = mainContent?.MainText?.split(" ") || [];

  return (
    <div className="bg-gray-50 py-16">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <div className="space-y-6">
              <Typography className="text-lg font-medium text-blue-600">
                {mainContent?.TopText}
              </Typography>
              <Typography className="text-4xl font-bold">
                {splitText.slice(0, -1).join(" ")} <span className="text-blue-600">{splitText.slice(-1)}</span>
              </Typography>
              <Typography className="text-gray-700">
                {mainContent?.BottomText}
              </Typography>
              <div className="space-x-4 mt-4">
                <Button variant="contained" color="primary" href="#JEMIX">
                  {mainContent?.Button1}
                </Button>
                <Button variant="outlined" href={`#${mainContent?.Button2}`}>
                  {mainContent?.Button2}
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={heroImage}
                alt="hero"
                width={500}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};