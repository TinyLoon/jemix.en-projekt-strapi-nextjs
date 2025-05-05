// components/Footer.tsx

"use client";

import { useFooterContent } from "@/hooks/useFooterContent";
import { Container, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

export const Footer = () => {
  const { content, isLoading } = useFooterContent();

  if (isLoading || !content) return null;

  return (
    <footer className="bg-black text-white py-12">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Typography variant="h6" className="mb-2">
              {content.Title}
            </Typography>
            <Typography variant="body2">{content.Description}</Typography>
          </div>

          <div className="flex md:justify-end gap-4 mt-4 md:mt-0">
            <Typography variant="body2" className="mr-4">
              {content.FollowUs}
            </Typography>
            <IconButton component={Link} href={content.FacebookLink} target="_blank">
              <Facebook className="text-white" />
            </IconButton>
            <IconButton component={Link} href={content.InstagramLink} target="_blank">
              <Instagram className="text-white" />
            </IconButton>
            <IconButton component={Link} href={content.LinkedInLink} target="_blank">
              <LinkedIn className="text-white" />
            </IconButton>
          </div>
        </div>
      </Container>
    </footer>
  );
};