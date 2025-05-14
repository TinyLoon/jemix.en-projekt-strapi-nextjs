"use client";

import Image from "next/image";
import { Container, Grid, Typography } from "@mui/material";
import { useServiceItems } from "@/hooks/useServiceItems";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function MidSection() {
  const { language } = useLanguageStore();
  const { serviceItems } = useServiceItems(language);

  if (!serviceItems) return null;

  return (
    <section className="bg-white py-24">
      {serviceItems.map((item, index) => {
        const data = item.attributes;
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
                {data.icon?.data?.attributes?.url && (
                  <Image
                    src={data.icon.data.attributes.url}
                    alt={data.icon.data.attributes.alternativeText || "Service Icon"}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                )}
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className={isImageLeft ? "order-2" : "order-1"}
              >
                <div className="space-y-4">
                  <Typography variant="h5" className="font-bold text-blue-600">
                    {data.title}
                  </Typography>
                  <Typography className="text-gray-700">
                    {data.description}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        );
      })}
    </section>
  );
}