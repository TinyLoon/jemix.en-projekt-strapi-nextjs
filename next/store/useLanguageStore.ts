"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type LanguageStore = {
  language: string;
  setLanguage: (lang: string) => void;
};

// Ensure this file exports RootState
export type RootState = {
  language: {
    language: string;
  };
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: getInitialLanguage(), // Wird einmalig beim Laden gesetzt
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "language-store", // 🗝️ localStorage key
      skipHydration: true,    // ✅ optional: verhindert SSR-Konflikte
    }
  )
);

// Hilfsfunktion zum Ermitteln der Sprache
function getInitialLanguage(): string {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("language-store");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.state?.language) return parsed.state.language;
      } catch {
        // Ignorieren bei Fehler
      }
    }

    const lang = navigator.language.split("-")[0];
    return ["en", "de", "es", "fr"].includes(lang) ? lang : "de";
  }

  return "de";
}