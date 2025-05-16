// 📁 components/context/ClientSlugProvider.tsx

"use client";

import { useEffect } from "react";
import { useSlugContext } from "@/components/context/SlugContext";

interface Props {
  slugs: Record<string, string>;
  children: React.ReactNode;
}

export default function ClientSlugProvider({ slugs, children }: Props) {
  const { dispatch } = useSlugContext();

  useEffect(() => {
    dispatch({ type: "SET_SLUGS", payload: slugs });
  }, [dispatch, slugs]);

  return <>{children}</>;
}