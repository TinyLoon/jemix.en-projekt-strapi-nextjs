// components/Layout/LanguageDrawer.tsx
"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  Drawer,
  MenuItem,
  Select,
  SelectChangeEvent,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useLanguageStore } from "@/hooks/useLanguageStore";
import { Close } from "@mui/icons-material";

const LANGUAGES = ["English", "Deutsch", "Spanish"] as const;

type LanguageOption = (typeof LANGUAGES)[number];

const LanguageDrawer = () => {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>("English");

  const { setLanguage } = useLanguageStore();

  useEffect(() => {
    const stored = (localStorage.getItem("country") ||
      Cookies.get("country")) as LanguageOption | undefined;

    if (stored && LANGUAGES.includes(stored)) {
      setLanguage(stored);
      setSelectedLanguage(stored);
    } else {
      setOpen(true);
    }
  }, [setLanguage]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newLang = event.target.value as LanguageOption;
    setSelectedLanguage(newLang);
  };

  const handleContinue = () => {
    Cookies.set("country", selectedLanguage, { expires: 365 });
    localStorage.setItem("country", selectedLanguage);
    setLanguage(selectedLanguage);
    setOpen(false);
  };

  return (
    <Drawer anchor="top" open={open}>
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h6">Choose your language</Typography>
        <Select value={selectedLanguage} onChange={handleChange}>
          {LANGUAGES.map((lang) => (
            <MenuItem key={lang} value={lang}>
              {lang}
            </MenuItem>
          ))}
        </Select>
        <Box display="flex" gap={2}>
          <Button onClick={handleContinue} variant="contained">
            Continue
          </Button>
          <Button onClick={() => setOpen(false)} startIcon={<Close />}>
            Close
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default LanguageDrawer;