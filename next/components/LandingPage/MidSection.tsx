"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useLandingPageMainContent } from "@/hooks/useLandingPageMainContent";

export default function MidSection() {
  const { data: serviceListData } = useLandingPageMainContent();

  if (!serviceListData) return null;

  return (
    <div className="bg-white py-24">
      {serviceListData.map((item, index) => {
        const isImageLeft = index % 2 === 0;

        return (
          <Container maxWidth="xl" key={item.id} className="mb-16">
            <Grid container spacing={6} alignItems="center">
              <Grid
                item
                xs={12}
                md={6}
                className={isImageLeft ? "order-1" : "order-2"}
              >
                <Image
                  src={item.attributes.Image?.data?.attributes?.url || "/fallback.jpg"}
                  alt={item.attributes.TopHeading}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className={isImageLeft ? "order-2" : "order-1"}
              >
                <div className="space-y-4">
                  <Typography className="text-blue-600 font-semibold">
                    {item.attributes.TopHeading}
                  </Typography>
                  <Typography variant="h4" className="font-bold">
                    {item.attributes.BottomHeading}
                  </Typography>
                  <Typography className="text-gray-700">
                    {item.attributes.Description}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        );
      })}
    </div>
  );
}