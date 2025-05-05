import { create } from 'zustand'; // Use named import instead of default import

interface LanguageState {
  language: string;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'English',
  setLanguage: (language) => set({ language }),
}));