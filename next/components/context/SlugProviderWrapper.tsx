// 📁 components/context/SlugProviderWrapper.tsx

import { SlugProvider } from "@/components/context/SlugContext";
import ClientSlugProvider from "./ClientSlugProvider";

interface Props {
  children: React.ReactNode;
  slugs: Record<string, string>;
}

export default function SlugProviderWrapper({ children, slugs }: Props) {
  return (
    <SlugProvider>
      <ClientSlugProvider slugs={slugs}>
        {children}
      </ClientSlugProvider>
    </SlugProvider>
  );
}