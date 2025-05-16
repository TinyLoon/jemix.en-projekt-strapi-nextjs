"use client";

import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { useTopCardsContent } from "@/hooks/useTopCardsContent";

export default function TopCards() {
  const { data: topCards, isLoading, error } = useTopCardsContent();

  if (isLoading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Lade Inhalte...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-600">
        Fehler beim Laden der Karten.
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-20">
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {topCards.map((card) => {
            const iconUrl = card.attributes?.Icon?.data?.attributes?.url;
            return (
              <Grid item xs={12} md={4} key={card.id}>
                <div className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col items-center text-center">
                  {iconUrl && (
                    <Image
                      src={iconUrl}
                      alt={card.attributes.Title || "Symbol"}
                      width={64}
                      height={64}
                      className="mb-4"
                    />
                  )}
                  <Typography variant="h6" className="font-semibold mb-2">
                    {card.attributes.Title}
                  </Typography>
                  <Typography className="text-gray-600">
                    {card.attributes.Description}
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}